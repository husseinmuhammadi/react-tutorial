import React, { useState } from 'react';
import Form from './form';

const ProductEntry = ({ onSave, onCancel }) => {

  const [product, setProduct] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    console.log('ProductEntry.handleSubmit', product);
    e.preventDefault();
  }

  return (

    <Form onSubmit={handleSubmit}>
      <form>
        <div class="form-group">
          <label htmlFor="exampleInputEmail1">Product name</label>
          <input type="text" class="form-control" id="product-name" aria-describedby="productNameHelp" placeholder="Product name"
            name="name" value={product.name} onChange={handleChange} required />
          <small id="productNameHelp" class="form-text text-muted">Enter product name.</small>
        </div>
        <div class="form-group">
          <label htmlFor="product-description">Product description</label>
          <input type="text" class="form-control" id="product-description" placeholder="Product description"
            name="description" value={product.description} onChange={(e) => handleChange(e)} required />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button className='btn btn-secondary' onClick={onCancel}>Cancel</button>
      </form>
    </Form>
  )
}

export default ProductEntry;