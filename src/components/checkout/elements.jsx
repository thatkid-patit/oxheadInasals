import styled from "styled-components"
import { Link } from "react-router-dom"

export const CheckoutContainer = styled.div`
    min-height: 650px;
    background-color: #eaeaea;
    padding: 50px 0 50px 0;
`;

export const CheckoutContent = styled.div`
    max-width: 1280px;
    margin: auto;
`;

export const CheckoutForm = styled.form`
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    @media screen and (max-width: 786px) {
        flex-direction: column;
    }
`;


export const CheckoutDeliveryForm = styled.section`
    margin: 10px;
    max-width: 500px;
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export const CheckoutH5 = styled.h5`
    font-size: 1.5rem;
    width: 100%;
    margin: 10px;
    color: #8e793e;
`;

export const CheckoutDoubleInput = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const DoubleInput = styled.input`
    margin: 10px;
    width: 100%;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #fff;
    outline: none;
    font-size: 1rem;
    color: #231f20;
`;

export const CheckoutSingleInput = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const CheckoutSingleInputCheck = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const SingleInput = styled.input`
    margin: 10px;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #fff;
    outline: none;
    font-size: 1rem;
    color: #231f20;
`;

export const Inputlabel = styled.label`
    color: #231f20;
    font-size: 1rem;
    font-weight: 500;
    margin: 10px;
`;

export const CheckoutPaymentForm = styled.section`
    margin: 20px 10px 10px 10px;
    max-width: 500px;
    flex: 1;
`;

export const OrderSummaryDetails = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 10px;
`;

export const OrderSummaryNormal = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: #8e793e;
`;

export const OrderSummaryBold = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    color: #8e793e;
`;

export const CheckoutSelect = styled.select`
    margin: 0 10px 10px 10px;
    background: #fff;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #fff;
    outline: none;
    font-size: 1rem;
    color: #231f20;
`;

export const CheckoutOption = styled.option`
    padding: 5px;
    font-size: 1rem;
`;

export const CheckoutSubmit = styled.section`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 10px;
`;

export const CheckoutCash = styled.button`
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
    margin-top: 50px;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`;

export const CheckoutPayment = styled(Link)`
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
    margin-top: 50px;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`;