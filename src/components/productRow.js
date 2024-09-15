import React from "react";

const ProductRow = ({ product, deleteProduct }) => {
  return (
    <tr>   
      <td>{product.id}</td>  
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
      </td>
    </tr>
  )
};

export default ProductRow;