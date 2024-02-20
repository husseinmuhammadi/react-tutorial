import React, { useEffect, useState } from "react";
import ProductList from "./productList";
import ProductAdd from "./productAdd";
import { get, post, remove } from "../services/http"
import ProductEntry from "./productEntryForm";

const productList = [
  {
    id: 1,
    name: "Computer",
    description: "Computer",
    price: 100,
    expiryDate: new Date("2022-03-12")
  },
  {
    id: 2,
    name: "Laptop",
    description: "Laptop",
    price: 150,
    expiryDate: new Date("2023-03-12")
  }
]

const ProductContainer = () => {

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isViewing, setIsViewing] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const URL_PRODUCTS = "http://localhost:8080/api/v1/products";
  const URL_PRODUCT = "http://localhost:8080/api/v1/products/{id}";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(URL_PRODUCTS)
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  const handleSave = (product) => {
    if (isEditing) {
      const index = products.findIndex(p => p.id === product.id);
      const newProducts = [...products];
      newProducts[index] = product;
      setProducts(newProducts);
    } else {
      console.log("Adding", product);
      post(URL_PRODUCTS, product).then((response) => {
        if (response.status === 201) {
          // https://stackoverflow.com/questions/48413050/missing-headers-in-fetch-response
          // return get(response.headers.get('Location'));                    
        }
      }).then((product) => {
        get(URL_PRODUCTS).then((products) => {
          setProducts(products);          
          setErrorMessages([]);
          showProductList();
        })
      }).catch((error) => {
        console.log(error);
        setErrorMessages(
          errorMessages.concat(error.message)
        );
      });
    }
  };

  const handleDelete = (id) => {
    console.log("Deleting", id);
    remove(URL_PRODUCT, id).then(() => {
      console.log("Deleted", id);
      setProducts(products.filter(p => p.id !== id));
      setErrorMessages([]);
    }).catch((error) => {
      console.log(error);
      setErrorMessages(
        errorMessages.concat(error.message)
      );
    });
  };

  const selectMode = (mode) => {
    setErrorMessages([]);
    setIsEditing(mode === "edit");
    setIsAdding(mode === "add");
    setIsDeleting(mode === "delete");
    setIsViewing(mode === "view");
    setIsSearching(mode === "search");
  }

  const showProductEntry = () => selectMode("add");
  const showProductList = () => selectMode("view");

  return (
    <>
      {errorMessages && errorMessages.length > 0 && (
        <div className="alert alert-primary" role="alert">
          {errorMessages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      )}
      {isViewing && <ProductList title="Products" products={products}
        onAdd={showProductEntry} onDelete={handleDelete} />}
      {/* {isAdding && <ProductEntry onSave={handleSave} onCancel={showProductList} />} */}
      {isAdding && <ProductEntry save={handleSave} cancel={showProductList} />}
    </>
  )
}

export default ProductContainer;