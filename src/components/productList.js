import React from "react";
import ProductRow from "./productRow";
import ProductAdd from "./productAdd";
import MyForm from "./productEntryForm";

const ProductList = ({ title, products, onAdd, onDelete }) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => <ProductRow id={product.id} product={product} deleteProduct={onDelete} />)}
        </tbody>
      </table>
      <ProductAdd onNewProduct={onAdd}>Add</ProductAdd>
    </React.Fragment>
  )
};

export default ProductList;