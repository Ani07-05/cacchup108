import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  text-align: center;
  background: url('/assets/samudra-manthan.webp') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  color: white;
  font-family: 'Roboto', sans-serif;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
  padding: 1em;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #00bfff;
  }
`;

const CartButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: #00bfff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #009acd;
  }
`;

const Section = styled.section`
  animation: ${fadeIn} 0.5s ease-in-out;
  min-height: 100vh;
  padding: 4em 2em;
  color: white;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;

const TitleSection = styled(Section)`
  background: rgba(0, 0, 0, 0.8);
`;

const Title = styled.h1`
  font-size: 4em;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
`;

const Subtitle = styled.h2`
  font-size: 2em;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #00bfff;
`;

const ProductsSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2em;
  width: 100%;
  padding: 2em;
`;

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1em;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const handleNavClick = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

function HomePage() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <Container>
      <NavBar>
        <NavItem onClick={() => handleNavClick('home')}>Home</NavItem>
        <NavItem onClick={() => handleNavClick('about')}>About Us</NavItem>
        <NavItem onClick={() => handleNavClick('products')}>Products</NavItem>
        <NavItem onClick={() => handleNavClick('artisans')}>Artisans</NavItem>
        <NavItem onClick={() => handleNavClick('sustainability')}>Sustainability</NavItem>
        <NavItem onClick={() => handleNavClick('certifications')}>Certifications</NavItem>
        <NavItem onClick={() => handleNavClick('FAQ')}>FAQ</NavItem>
        <NavItem onClick={() => handleNavClick('contact')}>Contact Us</NavItem>
        <CartButton onClick={handleCartClick}>
          View Cart ({cart.length})
        </CartButton>
      </NavBar>
      <TitleSection id="home">
        <Title>Cacchup</Title>
        <Subtitle>Convenient Accessible Companion for Holding Unparalleled Possessions</Subtitle>
      </TitleSection>
      <Section id="about">
        <h2>About Us</h2>
        <p>Cacchup is a foldable bag that folds or unfolds into preferred sizes, serving multiple purposes to every customer of society.
           Derived from the Sanskrit word "Kacchup" meaning tortoise, the name 'Cachhup' represents the tortoise form of Lord Vishnu. 
           This foldable bag mirrors the tortoise's ability to expand and contract its limbs, symbolizing adaptability. 
           The bag's durability echoes the long lifespan of the tortoise, representing the product's long-lasting quality.
        </p>
      </Section>
      <ProductsSection id="products">
        <ProductCard>
          <h3>Solid-Colour</h3>
          <ProductImage src="/assets/prod1.jpeg" alt="Product 1" />
          <button onClick={() => navigate('/product1')}>Buy Now</button>
        </ProductCard>
        <ProductCard>
          <h3>Printed</h3>
          <ProductImage src="/assets/prod2.jpeg" alt="Product 2" />
          <button onClick={() => navigate('/product2')}>Buy Now</button>
        </ProductCard>
        <ProductCard>
          <h3>Non-foldable</h3>
          <ProductImage src="/assets/prod3.jpeg" alt="Product 3" />
          <button onClick={() => navigate('/product3')}>Buy Now</button>
        </ProductCard>
      </ProductsSection>
      <Section id="artisans">
        <h2>Artisans</h2>
        <p>Artisan Support: Partnering with Shobha Kala Creations, a social enterprise connecting local artisans and tailors, to provide a platform for these skilled craftspeople to display their talents.
        Cultural Preservation: We emphasize the cultural and artistic significance of these artisans' work, ensuring their heritage is not lost.
        Empowerment: By supporting these artisans, we contribute to the preservation of India's rich cultural legacy and offer them sustainable income opportunities.
        Ethical Production: Every Cachhup bag is meticulously handcrafted by our skilled artisans, resulting in distinctive, ethically produced items</p>
      </Section>
      <Section id="sustainability">
        <h2>Sustainability</h2>
        <p>It's astonishing to learn that a staggering 11 million tons of textile waste are added to landfills each year worldwide, enough to fill the Empire State Building nearly twice. In India alone, the textile waste generation reaches an alarming 7,793 kilotonnes annually, equivalent to the weight of approximately 100,000 elephants. At Cachhup, we strive to make a positive change by transforming these waste materials into our beautiful, eco-friendly bags.
          (https://www.businesswaste.co.uk/your-waste/textile-recycling/fashion-waste-facts-and-statistics/#:~:text=It's%20also%20led%20to%20unstylish,million%20tonnes%20of%20textile%20waste. “Fashion waste statistics”). By doing so, we aim to contribute to a more sustainable future and reduce the environmental impact caused by textile waste.</p>
      </Section>
      <Section id="certifications">
        <h2>Certifications</h2>
        <p>Threads, RUDRA, Green Alliance</p>
      </Section>
      <Section id="FAQ">
        <h2>FAQ</h2>
        <p>This is the FAQ section.</p>
      </Section>
      <Section id="contact">
        <h2>Contact Us</h2>
        <p>Email: services.cacchup@gmail.com
           Instagram: @cacchup.now
        </p>
      </Section>
    </Container>
  );
}

export default HomePage;
