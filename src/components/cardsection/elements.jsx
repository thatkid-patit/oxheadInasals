import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const CardContainer = styled.div`
    min-height: 800px;
    padding: 80px 0;
    background: #231f20;
`;

export const CardContent = styled.div`
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CardTopline = styled.h5`
    text-align: center;
    margin: 20px;
    font-size: 1.5rem;
    color: #f5d66f;

    @media screen and (max-width: 1024px) {
        font-size: 1.2rem;
    }
`;

export const CardHeading = styled.h5`
    text-align: center;
    margin: 20px;
    font-size: 3rem;
    color: #eaeaea;

    @media screen and (max-width: 1024px) {
        font-size: 2.7rem;
    }
`;

export const CardWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
`;

export const Card = styled(RouterLink)`
    margin: 20px;
    width: 300px;
    height: 300px;
    border-radius: 5px;
    background: #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #eaeaea;
        transition: all 0.2s ease-in-out;
    }

    &:hover img{
        width: 100%;
        height: 60%;
        transition: all 0.2s ease-in-out;
    }

    &:hover p{
        display: flex;;
        margin: 10px;
        padding: 5px;  
        color: #231f20;
        font-size: .9rem;
        margin: 10px;
        transition: all 0.2s ease-in-out;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 85%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
    transition: all 0.2s ease-in-out;
`;

export const CardTitle = styled.h5`
    margin: 10px;
    font-size: 1rem;
    color: #231f20;
    text-align: center;
    transition: all 0.2s ease-in-out;
`;

export const CardLead = styled.p`
    display: none;
`;
