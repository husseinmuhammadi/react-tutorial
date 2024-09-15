import React from "react";

const ProductAdd = ({ onNewProduct, children }) => {
  return (
    <button className="btn btn-primary" onClick={onNewProduct}>{children}</button>
  )
}

export default ProductAdd;