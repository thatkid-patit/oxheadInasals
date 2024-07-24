import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { BsBasket3Fill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: ${({$scrollNav}) => ($scrollNav ? '#231f20' : 'transparent')};
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.1s all ease;
    margin-top: -80px;
`


export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    padding: 10px;
`

export const Brand = styled(RouterLink)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

export const BrandLogo = styled.img`
    height: 60px;
`

export const BrandName = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin: auto 10px;
    color: #eaeaea;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavList = styled.li`
    height: 80px;
`

export const NavItem = styled(ScrollLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-weight: bold;
    font-size: 1.2rem;
    color: #eaeaea;
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &.active {
        border-bottom: 4px solid #ee73c4;
        transition: 0.2s ease-in-out;
    }
    
    &:hover {
        background: #f5d66f;
        color: #231f20;
    }
`

export const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 80px;
`

export const BasketContainer = styled(RouterLink)`
    position: relative;
    padding: 0 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eaeaea;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #f5d66f;
        color: #231f20;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const Basket = styled(BsBasket3Fill)`
    font-weight: bold;
    font-size: 2rem;
`

export const Badge = styled.p`
    position: absolute;
    top: 20px;
    right: 5px;
    height: 1.3rem;
    min-width: 1.3rem;
    border-radius: 50%;
    font-size: .8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
        background: #ff0000;
    }
`
export const TogglerContainer = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #eaeaea;
        transition: 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const Toggler = styled(FaBars)`
    font-weight: bold;
    font-size: 2rem;
`

export const ButtonContainer = styled.div`
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const UserButton = styled(RouterLink)`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #231f20;
    font-weight: bold;
    font-size: 1.2rem;
    background: #ee73c4;
    border-radius: 5px;
    white-space: nowrap;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`

export const SignInButton = styled.button`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #231f20;
    font-weight: bold;
    font-size: 1.2rem;
    background: #ee73c4;
    border-radius: 5px;
    white-space: nowrap;
    border: none;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`