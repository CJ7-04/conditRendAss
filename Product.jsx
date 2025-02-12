// Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-price">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
