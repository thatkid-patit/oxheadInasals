import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const InfoContainer = styled.div`
    min-height: 800px;
    padding: 100px 0 50px 0;
    background: #eaeaea;
`;

export const InfoContent = styled.div`
    max-width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const InfoColumn1 = styled.section`
    max-width: 500px;
    min-width: 360px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const InfoTopline = styled.h5`
    font-size: 1.5rem;
    margin: 10px;
    color: #8e793e;

    @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
    }
`;

export const InfoHeading = styled.h3`
    text-align: end;
    margin: 10px;
    font-size: 3rem;
    color: #231f20;

    @media screen and (max-width: 1024px) {
        font-size: 2.7rem;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const InfoLead = styled.p`
    font-size: 1.2rem;
    margin: 10px;
    text-align: end;
    color: #231f20;

    @media screen and (max-width: 1024px) {
        font-size: .9rem;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;

export const InfoButtonContainer = styled.section`
    margin: 10px;
    display: flex;
    width: 100%;
    justify-content: end;
    align-items: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const InfoActionButtonR = styled(RouterLink)`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #231f20;
    font-weight: bold;
    font-size: 1.2rem;
    background: #ee73c4;
    border-radius: 5px;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px) {
        font-size: .9rem;
    }

`;

export const InfoActionButtonS = styled(ScrollLink)`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #231f20;
    font-weight: bold;
    font-size: 1.2rem;
    background: #ee73c4;
    border-radius: 5px;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`;

export const InfoColumn2 = styled.section`
    max-width: 500px;
    min-width: 360px;
    margin: 20px;
    padding: 10px;
`;

export const InfoImage = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 5px;
`;
