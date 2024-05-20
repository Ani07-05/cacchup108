import React from 'react';
import axios from 'axios';

const PaymentPage = () => {
  const handlePaymentCompletion = async () => {
    try {
      await axios.post('http://localhost:5000/log-payment', {
        orderId: 'your-order-id', // Replace with actual order ID
        status: 'paid'
      });
      alert('Thank you for your payment!');
    } catch (error) {
      console.error('Error logging payment:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px' }}>
      <h1>Complete Your Payment</h1>
      <p>Scan the QR code below to pay using your UPI app:</p>
      <img src="/assets/qr-code.png" alt="UPI QR Code" style={{ width: '300px', height: '300px' }} />
      <p>UPI ID: your-upi-id@bank</p>
      <p>Note: Please complete the payment and click the button below.</p>
      <button
        onClick={handlePaymentCompletion}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        I Have Completed the Payment
      </button>
    </div>
  );
};

export default PaymentPage;
