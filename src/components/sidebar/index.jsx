import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
    SidebarContainer,
    CloseButtonContainer,
    CloseButton,
    Close,
    SideMenu,
    SideList,
    SideItem,
    Basket,
    Badge,
    ButtonContainer,
    UserButton,
    SignInButton
} from './elements'

const Sidebar = ({$sidebarIsOpen, toggleSidebar, toggleLogin}) => {

  const handleClickSignin = () => {
    toggleSidebar();
    toggleLogin();
  }

  const {logged, cartItemCount} = useContext(StoreContext);

  return (
    <>
    <SidebarContainer $sidebarIsOpen={$sidebarIsOpen ? 1 : 0} onClick={toggleSidebar}>
        <CloseButtonContainer>
            <CloseButton onClick={toggleSidebar}>
                <Close/>
            </CloseButton>
        </CloseButtonContainer>
        <SideMenu>
            <SideList><SideItem to='home' onClick={toggleSidebar}>Home</SideItem></SideList>
            <SideList><SideItem to='about' onClick={toggleSidebar}>About</SideItem></SideList>
            <SideList><SideItem to='services' onClick={toggleSidebar}>Services</SideItem></SideList>
            <SideList><SideItem to='menu' onClick={toggleSidebar}>Menu</SideItem></SideList>
            <SideList>
                <Basket to='/cart' onClick={toggleSidebar}>
                    Basket
                    <Badge className = {cartItemCount !== 0 ? "active" : ""}>{cartItemCount === 0 ? "" : cartItemCount}</Badge>
                </Basket>
            </SideList>
        </SideMenu>
        <ButtonContainer>
            {
              logged
                ? <UserButton to='/myaccount' onClick={toggleSidebar}>My Account</UserButton>
                : <SignInButton onClick={handleClickSignin}>Sign In</SignInButton>
            }
        </ButtonContainer>
    </SidebarContainer>
    </>
  )
}

export default Sidebar
