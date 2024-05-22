import React from 'react';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212; /* Dark background color */
  color: #fff; /* White text color */
`;

const PaymentContent = styled.div`
  text-align: center;
`;

const PaymentTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const PaymentText = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

const QRCodeImage = styled.img`
  margin-top: 50px;
  max-width: 100%;
  height: auto;
`;

const PaymentPage = () => {
  return (
    <PaymentContainer>
      <PaymentContent>
        <PaymentTitle>Complete Your Payment</PaymentTitle>
        <PaymentText>An email with the QR code for payment has been sent to you. Please check your email and complete the payment.</PaymentText>
        {/* Include your QR code image here */}
      </PaymentContent>
    </PaymentContainer>
  );
};

export default PaymentPage;
