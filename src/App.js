import './App.css';
import AddProduct from './Pages/AddProduct';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the external API
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data); // Set fetched data to state
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/DashBoard" element={<Home products={products} />} />
          <Route path="/AddProduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
