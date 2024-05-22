import React, { useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

// Global styles to ensure the entire page has a dark theme
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1a1a1a;
    color: #f5f5f5;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 50px auto;
  padding: 20px;
  background: #262626;
  color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: white;
`;

const EmptyCartMessage = styled.p`
  font-size: 1.5em;
  color: #ff6b6b;
`;

const ProductCard = styled.div`
  margin: 20px auto;
  padding: 20px;
  background: #333;
  border: 1px solid #444;
  border-radius: 10px;
  max-width: 600px;
  text-align: left;
`;

const ProductName = styled.h2`
  font-size: 1.5em;
  color: #ff9f43;
`;

const ProductPrice = styled.p`
  font-size: 1.2em;
  color: #f5f5f5;
`;

const ProductQuantity = styled.p`
  font-size: 1.2em;
  color: #f5f5f5;
`;

const RemoveButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #c0392b;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CheckoutButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
  margin-top: 20px;

  &:hover {
    background: #388E3C;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Total = styled.p`
  font-size: 1.5em;
  color: #fff;
  margin-top: 20px;
`;

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const calculateTotal = () => {
    return cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Your Cart</Title>
        {cart.length === 0 ? (
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        ) : (
          cart.map((product, index) => (
            <ProductCard key={index}>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>Price: ₹{product.price}</ProductPrice>
              <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
              <RemoveButton onClick={() => removeFromCart(product.id)}>Remove</RemoveButton>
            </ProductCard>
          ))
        )}
        {cart.length > 0 && (
          <>
            <Total>Total: ₹{calculateTotal()}</Total>
            <CheckoutButton onClick={handleCheckout}>Proceed to Checkout</CheckoutButton>
          </>
        )}
      </Container>
    </>
  );
};

export default CartPage;
