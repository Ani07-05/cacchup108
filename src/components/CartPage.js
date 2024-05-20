import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product, index) => (
          <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid black' }}>
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => removeFromCart(product.id)} style={{ padding: '10px 20px', fontSize: '16px' }}>Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <button onClick={handleCheckout} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Proceed to Checkout</button>
      )}
    </div>
  );
};

export default CartPage;
