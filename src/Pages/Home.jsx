import React from 'react';
import NavBar from '../Components/NavBar'; // Assuming you have a Navbar component
import { Link } from 'react-router-dom'; // For navigation to the AddProduct page

function Home({ products }) {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '2rem' }}>
       
        <h2 style={{
          textAlign:'center',
          fontFamily:'bahnschrift'
        }}>Product Dashboard</h2>
        <table style={{ border: '1px solid black', width: '100%', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>
                  <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
