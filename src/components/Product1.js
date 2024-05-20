import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Product1 = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id: 1, name: 'Product 1', price: 100 });
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Product 1</h1>
      <div>
        <img src="/assets/prod1.jpeg" alt="Product 1 Image 1" style={{ width: '300px', height: '300px' }} />
        <img src="/assets/prod1.jpeg" alt="Product 1 Image 2" style={{ width: '300px', height: '300px' }} />
      </div>
      <button onClick={handleAddToCart} style={{ padding: '10px 20px', fontSize: '16px' }}>Add to Cart</button>
    </div>
  );
};

export default Product1;
