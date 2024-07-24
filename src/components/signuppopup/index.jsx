import React,{ useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import {
    SignupContainer,
    Signupform,
    SignupHeader,
    SignupH1,
    SignupClose,
    SignupInputWrap,
    SignupInputWrap2,
    SignupInput,
    SignupInput2,
    SignupSubmit,
    SignupFooter,
    SignupP,
    SignupSpan
} from './elements'

const Signup = ({$signupIsOpen, toggleLogin, toggleSignup}) => {

    const {signUp} = useContext(StoreContext)

    // register input config
    const [registerInput, setRegisterInput] = useState({});
    const handleInput = (e) => {
        setRegisterInput({...registerInput, [e.target.name]: e.target.value});
    }

    //register post config
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            // use API key
            firstname: registerInput.firstname,
            lastname: registerInput.lastname,
            address: registerInput.address,
            city: registerInput.city,
            zipcode: registerInput.zipcode,
            phone: registerInput.phone,
            email: registerInput.email,
            password: registerInput.password,
            password_confirmation: registerInput.password_confirmation
        }
        signUp(formData, toggleSignup, toggleLogin);
    }

    // register login switch config
    const HandleClickLoginHere = () => {
        toggleSignup();
        toggleLogin();
    }

    // show privacy policy config
    const navigate = useNavigate();
    const HandleClickPrivacyPolicy = () => {
        navigate('/privacy&policy');
        toggleSignup();
    }

  return (
    <>
    <SignupContainer $signupIsOpen={$signupIsOpen ? 1 : 0}>
        <Signupform onSubmit={handleSubmit}>
            <SignupHeader>
                <SignupH1>Sign up</SignupH1>
                <SignupClose onClick={toggleSignup}/>
            </SignupHeader>
            <SignupInputWrap>
                <SignupInput type='text' name='firstname' onChange={handleInput} placeholder='Your first name' required/>
                <SignupInput type='text' name='lastname' onChange={handleInput} placeholder='Your last name' required/>
            </SignupInputWrap>
            <SignupInputWrap>
                <SignupInput type='text' name='address' onChange={handleInput} placeholder='Your street address' required/>
            </SignupInputWrap>
            <SignupInputWrap>
                <SignupInput type='text' name='city' onChange={handleInput} placeholder='Your city/town' required/>
                <SignupInput type='number' name='zipcode' onChange={handleInput} placeholder='Your zipcode' required/>
            </SignupInputWrap>
            <SignupInputWrap>
                <SignupInput type='tel' name='phone' onChange={handleInput} placeholder='Your phone' required/>
                <SignupInput type='email' name='email' onChange={handleInput} placeholder='Your email' required/>
            </SignupInputWrap>
            <SignupInputWrap>
                <SignupInput type='password' name='password' onChange={handleInput} id='password1' placeholder='Your password' required/>
                <SignupInput type='password' name='password_confirmation' onChange={handleInput} id='password2' placeholder='Confirm password' required/>
            </SignupInputWrap>
            <SignupInputWrap2>
                <SignupInput2 type='checkbox' required/>
                <SignupP>By continuing, I agree to the <SignupSpan onClick={HandleClickPrivacyPolicy}>Terms of Use & Privacy Policy</SignupSpan></SignupP>
            </SignupInputWrap2>
            <SignupInputWrap>
                <SignupSubmit type="submit">Create Account</SignupSubmit>
            </SignupInputWrap>
            <SignupFooter>
                <SignupP>Already have an account? <SignupSpan onClick={HandleClickLoginHere}>Login here</SignupSpan></SignupP>
            </SignupFooter>
        </Signupform>
    </SignupContainer>
    </>
  )
}

export default Signup
