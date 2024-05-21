// Products.js
import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import Product from './Product';

const Products = () => {
  const products = useContext(ProductContext);

  return (
    <div className="products">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
