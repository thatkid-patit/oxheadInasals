import React from 'react'
import { assets } from '../../assets/assets'
import {
    FooterContainer,
    FooterContent,
    FooterCompany,
    FooterTitle,
    FooterCompanyListWrap,
    FooterCompanyList,
    FooterCompanyListS,
    FooterCompanyListR,
    FooterContact,
    FooterContactListWrap,
    FooterContactList,
    FooterSocMedWrap,
    Facebook,
    Instagram,
    Tiktok,
    FooterOperations,
    FooterOperationsWrap,
    FooterOperationDays,
    FooterNewsletter,
    NewsLetterForm,
    NewsLetterFormLabel,
    NewsLetterFormInput,
    NewsLetterFormButton,
    FooterCopy,
    FooterCopyright
} from './elements'

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterContent>
            <FooterCompany>
                <FooterTitle>Company</FooterTitle>
                <FooterCompanyListWrap>
                    <FooterCompanyList><FooterCompanyListR to='/about'>About</FooterCompanyListR></FooterCompanyList>
                    <FooterCompanyList><FooterCompanyListR to='/deliveryT&C'>Delivery T&C</FooterCompanyListR></FooterCompanyList>
                    <FooterCompanyList><FooterCompanyListR to='/pickupT&C'>Pick Up T&C</FooterCompanyListR></FooterCompanyList>
                    <FooterCompanyList><FooterCompanyListR to='/bulkorderT&C'>Bulk Order T&C</FooterCompanyListR></FooterCompanyList>
                    <FooterCompanyList><FooterCompanyListR to='/privacy&policy'>Privacy & policy</FooterCompanyListR></FooterCompanyList>
                </FooterCompanyListWrap>
            </FooterCompany>
            <FooterContact>
                <FooterTitle>Contact</FooterTitle>
                <FooterContactListWrap>
                    <FooterContactList>Address: {assets.address}</FooterContactList>
                    <FooterContactList>Phone: {assets.phone}</FooterContactList>
                    <FooterContactList>Email: {assets.email}</FooterContactList>
                </FooterContactListWrap>
                <FooterSocMedWrap>
                    <Facebook/>
                    <Instagram/>
                    <Tiktok/>
                </FooterSocMedWrap>
            </FooterContact>
            <FooterOperations>
                <FooterTitle>Operating Hours</FooterTitle>
                <FooterOperationsWrap>
                    <FooterOperationDays>Monday-Friday: 8am - 10pm</FooterOperationDays>
                    <FooterOperationDays>Saturday: 10am - 10pm</FooterOperationDays>
                    <FooterOperationDays>Sunday: 10am - 7pm</FooterOperationDays>
                </FooterOperationsWrap>
            </FooterOperations>
            <FooterNewsletter>
                <FooterTitle>NewsLetter</FooterTitle>
                <NewsLetterForm>
                    <NewsLetterFormLabel>Your Email</NewsLetterFormLabel>
                    <NewsLetterFormInput type='email' placeholder='your email'/>
                    <NewsLetterFormButton>Subscribe</NewsLetterFormButton>
                </NewsLetterForm>
            </FooterNewsletter>
        </FooterContent>
        <FooterCopy>
            <FooterCopyright>Copyright &copy; 2024 Oxhead Inasals</FooterCopyright>
        </FooterCopy>
    </FooterContainer>
    </>
  )
}

export default Footer
