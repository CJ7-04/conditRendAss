// App.js
import React from 'react';
import { ProductProvider } from './ProductContext';
import Products from './Products';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <ProductProvider>
      <div className="App">
        <h1>Products</h1>
        <Products />
      </div>
    </ProductProvider>
  );
};

export default App;
