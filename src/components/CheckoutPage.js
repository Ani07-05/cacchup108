import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Log the order details to the server (not implemented here)
    clearCart();
    // After placing the order, navigate to the payment page
    navigate('/payment');
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Checkout</h1>
      <p>Confirm your order and proceed to payment</p>
      <div>
        {cart.map((product, index) => (
          <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid black' }}>
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePlaceOrder} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Place Order</button>
      
      {/* Display the QR code image using src attribute */}
      <img src="/assets/qrc.jpeg" alt="QR Code" style={{ marginTop: '20px', maxWidth: '300px' }} />
    </div>
  );
};

export default CheckoutPage;
