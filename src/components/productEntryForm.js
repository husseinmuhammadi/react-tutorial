import React, { useState } from "react";

const ProductEntry = ({save, cancel}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    save({name, description});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input type="text" id="name" value={name}
          onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="description">
        Description
        <input type="text" id="description" value={description}
          onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={cancel}>Cancel</button>
    </form>
  )
}

export default ProductEntry;