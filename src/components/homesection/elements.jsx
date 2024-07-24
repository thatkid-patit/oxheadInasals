import { Link as ScrollLink } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.div`
    transition: 0.3s ease-in-out;
    background: #231f20;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 800px;
    position: relative;
    z-index: 1;

    &:before {
        content: '';
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.6) 100%
        ), linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            transparent 100%
        );
    }
`;

export const HomeBackground = styled.section`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HomeVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #231f20;
`;

export const HomeContent = styled.section`
    z-index: 3;
    max-width: 1280px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 60px;
`;

export const HomeHeading = styled.h1`
    font-size: 5rem;
    color: #f5d66f;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }
`;

export const HomeLead = styled.h5`
    margin-top: 40px;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const HomeButtonContainer = styled.section`
    margin-top: 40px;
    padding: 1rem;
    text-align: center;
`;

export const HomeActionButtonS = styled(ScrollLink)`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #ee73c4;
    font-weight: bold;
    font-size: 1.5rem;
    background: transparent;
    border-radius: 5px;
    border: .3rem solid #ee73c4;
    cursor: pointer;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
        border: .3rem solid #f5d66f;
    }
`;

export const HomeActionButtonR = styled.button`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: 1rem 2rem;
    color: #ee73c4;
    font-weight: bold;
    font-size: 1.5rem;
    background: transparent;
    border-radius: 5px;
    border: .3rem solid #ee73c4;
    cursor: pointer;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
        border: .3rem solid #f5d66f;
    }
`;
