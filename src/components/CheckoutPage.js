// src/components/CheckoutPage.js

import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceOrder = async () => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    const orderDetails = { ...formData, cart, total };

    try {
      const response = await fetch('http://localhost:5000/api/place-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        clearCart();
        setOrderPlaced(true);
        setTimeout(() => {
          navigate('/payment'); // Navigate to a simple payment page or thank you page
        }, 3000);
      } else {
        console.error('Order placement failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (orderPlaced) {
    return (
      <div style={{ textAlign: 'center', margin: '50px' }}>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your order. A confirmation email with payment instructions has been sent to you.</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Checkout</h1>
      <p>Confirm your order and proceed to payment</p>
      <form style={{ marginBottom: '20px' }}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Address: </label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
        </div>
      </form>
      <div>
        {cart.map((product, index) => (
          <div key={index} style={{ margin: '20px', padding: '20px', border: '1px solid black' }}>
            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
      <button onClick={handlePlaceOrder} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>Place Order</button>
    </div>
  );
};

export default CheckoutPage;
