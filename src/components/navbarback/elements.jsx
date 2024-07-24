import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarNullContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: #231f20;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.1s all ease;
`;

export const NavbarNullNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    padding: 10px;
`;

export const Brand = styled(Link)`
    justify-self: flex-start;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`;

export const BrandLogo = styled.img`
    height: 60px;
`;

export const BrandName = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin: auto 10px;
    color: #eaeaea;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;
