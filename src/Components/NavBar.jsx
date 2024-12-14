import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ padding: '1rem',
                 backgroundColor: '#333',
                  color: '#fff', }}>
                    <h2>Product Adder</h2>
    <div style={{
        textAlign:'right',
        marginRight:'2rem'
    }}>
      <Link to="/" style={{ color: '#fff',
                             marginRight: '20px',
                             textDecoration:'none'

       }}>Home</Link>
      <Link to="/AddProduct" style={{ color: '#fff',textDecoration:'none' }}>Add Product</Link>
      </div>
    </nav>
  );
}

export default NavBar;
