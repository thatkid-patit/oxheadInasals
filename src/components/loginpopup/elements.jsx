import styled from 'styled-components'
import { IoClose } from "react-icons/io5";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    background: #231f20a3;
    display: ${({$loginIsOpen}) => ($loginIsOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
`;

export const LoginForm = styled.form`
    border-radius: 5px;
    background: #eaeaea;
    width: 320px;
    padding: 20px;
    height: auto;

    @media screen and (max-width: 480px) {
        width: 100%;
        height: 100%;
    }
`;

export const LoginHeader = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const LoginH1 = styled.h1`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
`;

export const LoginClose = styled(IoClose)`
    font-size: 2rem;
    color: #8e793e;
    margin: 20px;
    cursor: pointer;
`;

export const LoginInputWrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

export const LoginInput = styled.input`
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 10px;
    color: #231f20;
`;

export const InputError = styled.p`
    font-size: .8rem;
    line-height: 1rem;
    color: #e80000;
`;

export const LoginSubmit = styled.button`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: .5rem 1rem;
    width: 100%;
    color: #231f20;
    font-size: 1rem;
    font-weight: 700;
    background: #ee73c4;
    border-radius: 5px;
    white-space: nowrap;
    margin: 20px;
    border: none;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`;

export const LoginFooter = styled.section`
    margin: 20px;
`;

export const LoginP = styled.p`
    color: #231f20;
    font-size: .8rem;
    font-weight: 500;
`;

export const LoginSpan = styled.span`
    color: #ee73c4;
    font-size: .8rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        color: #8e793e;
    }
`;
