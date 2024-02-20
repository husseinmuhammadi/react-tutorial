

const URL_PRODUCTS = "http://localhost:8080/api/v1/products";

const handleSaveProduct = (product) => {
  console.log("Saving", product);
  const save = async () => {
    const response = await fetch(URL_PRODUCTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });
    console.log("Response", response.headers.get('Location'));
    // if (response.status === 201) {
    //   const location = response.headers.get('Location');
    //   console.log("Location", location);
    //   const newProduct = await fetch(location).then(res => res.json());
    //   setProducts([...products, newProduct]);
    // }
  }
  save();
}

handleSaveProduct({name: "Mouse", description: "Mouse description"});