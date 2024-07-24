import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { FaTimes } from "react-icons/fa";


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    height: 100vh;
    width: 100vw;
    min-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #f5d66f;
    padding: 10px 10px 20vh 10px;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${($sidebarIsOpen) => ($sidebarIsOpen ? '100%' : '0')};
    top: ${({$sidebarIsOpen}) => ($sidebarIsOpen ? '0' : '-130%')};
`;

export const CloseButtonContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
`;

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
`;

export const Close = styled(FaTimes)`
    font-weight: bold;
    font-size: 2rem;
    color: #ff0000;
`;

export const SideMenu = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const SideList = styled.li`
    width: 100%;
`;

export const SideItem = styled(ScrollLink)`
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    color: #231f20;

    &:hover {
        background: #eaeaea;
    }
`;

export const Basket = styled(RouterLink)`
    font-weight: bold;
    font-size: 1.2rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    color: #231f20;
    position: relative;

    &:hover {
        background: #eaeaea;
    }
`;

export const Badge = styled.div`
    position: absolute;
    top: 30%;
    right: 35%;
    height: 1.3rem;
    min-width: 1.3rem;
    border-radius: 50%;
    font-size: .8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #eaeaea;

    &.active {
        background: #ff0000;
    }
`;

export const ButtonContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UserButton = styled(RouterLink)`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #231f20;
    font-weight: bold;
    font-size: 1.2rem;
    background: #ee73c4;
    border-radius: 5px;

    &:hover {
        background: #eaeaea;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`;

export const SignInButton = styled.button`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #231f20;
    font-weight: bold;
    font-size: 1.2rem;
    background: #ee73c4;
    border-radius: 5px;
    border: none;

    &:hover {
        background: #eaeaea;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`;