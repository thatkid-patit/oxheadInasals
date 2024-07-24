import styled from "styled-components";
import { IoIosRemoveCircle } from "react-icons/io";
import { 
    AiFillMinusCircle, 
    AiFillPlusCircle  
} from "react-icons/ai";

export const CartItemLineWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 360px;
    margin: 10px;
    background: #fff;
    padding:10px;
    border-radius: 5px;
`;

export const CartItemLineSection1 = styled.section`
    margin-right: 10px;
`;

export const CartItemLineSection2 = styled.section`
    width: calc(100% - 120px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const CartItemLineImage = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 5px;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const CartItemP = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: #231f20;
    margin: 0 30px;

    @media screen and (max-width: 768px) {
        align-self: flex-start;
    }

    @media screen and (max-width: 560px) {
        margin: 0 10px;
        font-size: .9rem;
    }
`;

export const CartItemQtyWrap = styled.section`
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        align-self: flex-end;
    }
`;

export const CartItemQtyMinus = styled(AiFillMinusCircle)`
    font-size: 25px;
    color: #8e793e;
    cursor: pointer;

    @media screen and (max-width: 560px) {
        font-size: 20px;
    }
`;

export const CartItemQtyInput = styled.input`
    padding: 0 10px;
    max-width: 50px;
    text-align: center;
    font-size: 1rem;
    color: #231f20;
    font-weight: 500;
    border: none;

    @media screen and (max-width: 560px) {
        font-size: .9rem;
    }
`;

export const CartItemQtyPlus = styled(AiFillPlusCircle)`
    font-size: 25px;
    color: #8e793e;
    cursor: pointer;

    @media screen and (max-width: 560px) {
        font-size: 20px;
    }
`;
