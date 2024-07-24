import styled from 'styled-components'
import {Link as ScrollLink} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { assets } from '../../assets/assets'


export const FooterContainer = styled.div`
    background: #231f20;
    height: auto;
`;

export const FooterContent = styled.div`
    margin: auto;
    max-width: 1280px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const FooterCompany = styled.section`
    margin: 20px;
    width: 270px;
`;

export const FooterTitle = styled.p`
    font-size: 1.2rem;
    text-align: left;
    font-weight: 700;
    color: #8e793e;
`;

export const FooterCompanyListWrap = styled.ul`
    margin: 10px;
`;

export const FooterCompanyList = styled.li`
    list-style: none;
`;

export const FooterCompanyListS = styled(ScrollLink)`
    color: #8e793e;
    font-size: .8rem;
    font-weight: 700;
    cursor: pointer;
`;

export const FooterCompanyListR = styled(RouterLink)`
    color: #8e793e;
    font-size: .8rem;
    font-weight: 700;
    cursor: pointer;
`;

export const FooterContact = styled.section`
    margin: 20px;
    width: 270px;
`;

export const FooterContactListWrap = styled.ul`
    margin: 10px;
`;

export const FooterContactList = styled.li`
    list-style: none;
    color: #8e793e;
    font-size: .8rem;
    font-weight: 700;
    line-height: 1.2rem;
`;

export const FooterSocMedWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Facebook = styled(FaFacebookSquare)`
    color: #8e793e;
    font-size: 1.5rem;
`;

export const Instagram = styled(FaSquareInstagram)`
    color: #8e793e;
    font-size: 1.5rem;
`;

export const Tiktok = styled(AiFillTikTok)`
    color: #8e793e;
    font-size: 1.5rem;
`;

export const FooterOperations = styled.section`
    margin: 20px;
    width: 270px;
`;

export const FooterOperationsWrap = styled.ul`  
    margin: 10px;   
`;

export const FooterOperationDays = styled.li`
    list-style: none;
    color: #8e793e;
    font-size: .8rem;
    font-weight: 700;
    line-height: 1.2rem;
`;

export const FooterNewsletter = styled.section`
    margin: 20px;
    width: 270px;
`;

export const NewsLetterForm = styled.form`
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const NewsLetterFormLabel = styled.label`
    color: #8e793e;
    font-size: .8rem;
    font-weight: 700;
    margin: 5px;
`;

export const NewsLetterFormInput = styled.input`
    width: 80%;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: .8rem;
    line-height: 1.2rem;
    padding: 5px;
    margin: 5px;
`;

export const NewsLetterFormButton = styled.button`
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    padding: .5rem 1rem;
    width: 80%;
    color: #231f20;
    font-size: .8rem;
    font-weight: 700;
    background: #ee73c4;
    border-radius: 5px;
    white-space: nowrap;
    margin: 5px;
    border: none;

    &:hover {
        background: #f5d66f;
        color: #231f20;
        transition: all 0.2s ease-in-out;
    }
`;

export const FooterCopy = styled.div`
    margin: auto;
    max-width: 1280px;
    border-top: 1px solid #756435;
`;

export const FooterCopyright = styled.p`
    text-align: center;
    color: #756435;
    font-size: .8rem;
    font-weight: 700;
    line-height: 1.2rem;
    padding: 10px;
`;
