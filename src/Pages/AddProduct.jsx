import React, { useState } from 'react';
import NavBar from '../Components/NavBar'; // Import NavBar component

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding product (for now, just console log the form data)
    console.log(formData);
    setFormData({ name: '', price: '', category: '', image: '' });
  };

  return (
    <div>
      <div style={{
        marginBottom:'3rem'
      }}>
      <NavBar /> {/* Add NavBar component here */}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:'#333333',color:'white',width: '500px',  // Set the desired width
  margin: 'auto',padding:'2rem',borderRadius:'25px'}}>
        <form onSubmit={handleSubmit}>
          <label>Enter your product name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br /><br />
          <label>Enter The price</label>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <br /><br />
          <label>Category</label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <br /><br />
          <label>Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
          <br /><br />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
