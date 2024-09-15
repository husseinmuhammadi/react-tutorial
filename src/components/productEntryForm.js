import React, { useState } from "react";

const ProductEntry = ({ save, cancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    save({ name, description });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" className="form-control" id="description" value={description}
          onChange={(e) => setDescription(e.target.value)} />

      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="button" className="btn btn-secondary" onClick={cancel}>Cancel</button>
    </form>
  )
}

export default ProductEntry;