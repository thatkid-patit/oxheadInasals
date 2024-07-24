import React, { useContext, useState, useEffect } from 'react'
import { assets } from '../../assets/assets'
import {
  Container,
  Nav,
  Brand,
  BrandLogo,
  BrandName,
  NavMenu,
  NavList,
  NavItem,
  Right,
  BasketContainer,
  Basket,
  Badge,
  TogglerContainer,
  Toggler,
  ButtonContainer,
  UserButton,
  SignInButton
} from './elements'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({toggleSidebar, toggleLogin}) => {

  const [scrollNav, setScrollNav] = useState(false);

  window.onscroll = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  }

  const {logged, cartItemCount} = useContext(StoreContext);

  return (
    <Container $scrollNav={scrollNav ? 1 : 0}>
      <Nav>
        <Brand to='/'>
          <BrandLogo src={assets.logo} alt='Oxhead Inasals'/>
          <BrandName>
            Oxhead Inasals
          </BrandName>
        </Brand>
        <NavMenu>
          <NavList><NavItem to='home' smooth={true} duration={500} spy={true} exact="true">Home</NavItem></NavList>
          <NavList><NavItem to='about' smooth={true} duration={500} spy={true} exact="true">About</NavItem></NavList>
          <NavList><NavItem to='services' smooth={true} duration={500} spy={true} exact="true">Services</NavItem></NavList>
          <NavList><NavItem to='menu' smooth={true} duration={500} spy={true} exact="true">Menu</NavItem></NavList>
        </NavMenu>
        <Right>
          <BasketContainer to='/cart'>
            <Basket/>
            <Badge className = {cartItemCount !== 0 ? "active" : ""}>{cartItemCount === 0 ? "" : cartItemCount}</Badge>
          </BasketContainer>
          <TogglerContainer onClick={toggleSidebar}>
            <Toggler/>
          </TogglerContainer>
          <ButtonContainer>
            {
              logged
                ? <UserButton to='/myaccount'>My Account</UserButton>
                : <SignInButton onClick={toggleLogin}>Sign In</SignInButton>
            }
          </ButtonContainer>  
        </Right>
      </Nav>
    </Container>
  )
}

export default Navbar
