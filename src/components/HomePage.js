import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Container = styled.div`
  text-align: center;
  background: url('/assets/samudra-manthan.webp') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  color: white;
`;

const Title = styled.h1`
  margin-top: 20%;
  font-size: 4em;
`;

const Subtitle = styled.h2`
  font-size: 2em;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 1em;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
`;

const CartButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

const ProductsSection = styled.section`
  display: flex;
  justify-content: space-around;
  margin-top: 50vh;
`;

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 1em;
  border-radius: 10px;
  width: 30%;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Section = styled.div`
  color: black;
  margin: 2em;
`;

function HomePage() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <Container>
      <NavBar>
        <NavItem href="#home">Home</NavItem>
        <NavItem href="#about">About Us</NavItem>
        <NavItem href="#products">Products</NavItem>
        <NavItem href="#artisans">Artisans</NavItem>
        <NavItem href="#sustainability">Sustainability</NavItem>
        <NavItem href="#certifications">Certifications</NavItem>
        <NavItem href="#feedback">Feedback</NavItem>
        <NavItem href="#contact">Contact Us</NavItem>
        <CartButton onClick={handleCartClick}>
          View Cart ({cart.length})
        </CartButton>
      </NavBar>
      <Title>Cacchup</Title>
      <Subtitle>Convenient Accessible Companion for Holding Unparalleled Possessions</Subtitle>
      <ProductsSection id="products">
        <ProductCard>
          <h3>Product 1</h3>
          <ProductImage src="/assets/prod1.jpeg" alt="Product 1" />
          <button onClick={() => navigate('/product1')}>Buy Now</button>
        </ProductCard>
        <ProductCard>
          <h3>Product 2</h3>
          <ProductImage src="/assets/prod2.jpeg" alt="Product 2" />
          <button onClick={() => navigate('/product2')}>Buy Now</button>
        </ProductCard>
        <ProductCard>
          <h3>Product 3</h3>
          <ProductImage src="/assets/product3.jpg" alt="Product 3" />
          <button onClick={() => navigate('/product3')}>Buy Now</button>
        </ProductCard>
      </ProductsSection>
      <Section id="about">
        <h2>About Us</h2>
        <p>This is the about us section.</p>
      </Section>
      <Section id="artisans">
        <h2>Artisans</h2>
        <p>This is the artisans section.</p>
      </Section>
      <Section id="sustainability">
        <h2>Sustainability</h2>
        <p>This is the sustainability section.</p>
      </Section>
      <Section id="certifications">
        <h2>Certifications</h2>
        <p>This is the certifications section.</p>
      </Section>
      <Section id="feedback">
        <h2>Feedback</h2>
        <p>This is the feedback section.</p>
      </Section>
      <Section id="contact">
        <h2>Contact Us</h2>
        <p>This is the contact us section.</p>
      </Section>
    </Container>
  );
}

export default HomePage;
