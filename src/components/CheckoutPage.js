import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const CheckoutContainer = styled.div`
  text-align: center;
  margin: 50px auto;
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  max-width: 800px;
`;

const Heading = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 1.2em;
  margin-bottom: 30px;
`;

const Form = styled.form`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  width: 100px;
  margin-right: 10px;
  font-size: 1.1em;
  text-align: right;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 1em;
  resize: none;
  overflow: hidden;
`;

const ProductCard = styled.div`
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 10px;
  background-color: #1f1f1f;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
`;

const ProductTitle = styled.h2`
  font-size: 1.5em;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
`;

const PlaceOrderButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const ThankYouMessage = styled.div`
  text-align: center;
`;

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Use navigate hook
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
    navigate('/payment')
    try {
      const response = await fetch('http://localhost:5000/api/place-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails),
      });
  
      if (response.ok) {
        clearCart();
        setOrderPlaced(true);
        ; // Navigate to payment page
      } else {
        console.error('Order placement failed', await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
      <GlobalStyle />
      <CheckoutContainer>
        {!orderPlaced ? (
          <>
            <Heading>Checkout</Heading>
            <Subheading>Confirm your order and proceed to payment</Subheading>
            <Form>
              <FormGroup>
                <Label>Name:</Label>
                <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
              </FormGroup>
              <FormGroup>
                <Label>Email:</Label>
                <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </FormGroup>
              <FormGroup>
                <Label>Address:</Label>
                <TextArea name="address" value={formData.address} onChange={handleInputChange} required rows="1" />
              </FormGroup>
            </Form>
            <div>
              {cart.map((product, index) => (
                <ProductCard key={index}>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductPrice>Price: ₹{product.price}</ProductPrice>
                </ProductCard>
              ))}
            </div>
            <PlaceOrderButton onClick={handlePlaceOrder}>Place Order</PlaceOrderButton>
          </>
        ) : (
          <ThankYouMessage>
            <Heading>Thank You for Your Order!</Heading>
            <Subheading>An email confirmation has been sent.</Subheading>
          </ThankYouMessage>
        )}
      </CheckoutContainer>
    </>
  );
};

export default CheckoutPage;
