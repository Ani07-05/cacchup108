import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Product3 = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id: 3, name: 'Product 3', price: 300 });
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Product 3</h1>
      <div>
        <img src="/assets/product3-image1.jpg" alt="Product 3 Image 1" style={{ width: '300px', height: '300px' }} />
        <img src="/assets/product3-image2.jpg" alt="Product 3 Image 2" style={{ width: '300px', height: '300px' }} />
      </div>
      <button onClick={handleAddToCart} style={{ padding: '10px 20px', fontSize: '16px' }}>Add to Cart</button>
    </div>
  );
};

export default Product3;
