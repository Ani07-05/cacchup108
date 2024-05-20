import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Product2 = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id: 2, name: 'Product 2', price: 200 });
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Product 2</h1>
      <div>
        <img src="/assets/prod2.jpeg" alt="Product 2 Image 1" style={{ width: '300px', height: '300px' }} />
        <img src="/assets/product2-image2.jpg" alt="Product 2 Image 2" style={{ width: '300px', height: '300px' }} />
      </div>
      <button onClick={handleAddToCart} style={{ padding: '10px 20px', fontSize: '16px' }}>Add to Cart</button>
    </div>
  );
};

export default Product2;
