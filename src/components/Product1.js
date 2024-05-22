import React, { useContext, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { CartContext } from '../contexts/CartContext';

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
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  text-align: center;
  color: white;
`;

const Price = styled.p`
  font-size: 1.5em;
  text-align: center;
  margin: 10px 0;
  color: white  ;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    margin: 0 10px;
    width: 365px;
    height: 500px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const AddToCartButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: linear-gradient(90deg, #feb47b, #ff7e5f);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
  margin: 0 auto;
  display: block;
`;

const AlertMessage = styled.p`
  color: #76c7c0;
  margin-top: 20px;
  font-size: 1.2em;
`;

const Product1 = () => {
  const { addToCart } = useContext(CartContext);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id: 1, name: 'Solid-Color', price: 499 });
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Solid-Color</Title>
        <ImageGallery>
          <img src="/assets/prod1.jpeg" alt="Solid-Color Image 1" />
          <img src="/assets/prod12.jpeg" alt="Solid-Color Image 2" />
        </ImageGallery>
        <Price>₹499</Price>
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        {alertVisible && <AlertMessage>Item added to cart!</AlertMessage>}
      </Container>
    </>
  );
};

export default Product1;
