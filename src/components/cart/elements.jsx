import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom'

export const CartContainer = styled.div`
    min-height: 500px;
    padding: 100px 0 50px 0;
    background: #eaeaea;
`;

export const CartContent = styled.div`
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const CartItemCard = styled.section` 
    width: 90%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const CardItemSubTotal = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;

export const CardH3 = styled.h3`
    color: #231f20;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 10px 10px 10px 50px;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const CardSubtotalCheckout = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    white-space: nowrap;
`;

export const CardButtonCheckoutR = styled(RouterLink)`
    margin: 10px;
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
    margin-right: 50px;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        padding: .5rem 1rem;
    }
`;

export const CartZero = styled.h1`
    text-align: center;
    color: #8e793e;
`

