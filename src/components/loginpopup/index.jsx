import React,{ useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LoginContainer,
  LoginForm,
  LoginHeader,
  LoginH1,
  LoginClose,
  LoginInputWrap,
  LoginInput,
  InputError,
  LoginSubmit,
  LoginFooter,
  LoginP,
  LoginSpan
} from './elements'
import { StoreContext } from '../../context/StoreContext'

const Login = ({$loginIsOpen, toggleLogin, toggleSignup}) => {

  const {login} = useContext(StoreContext);
  const navigate = useNavigate();

  // login input config
  const [loginInput, setLoginInput] = useState({});
  const handleInput = (e) => {
    setLoginInput({...loginInput, [e.target.name]: e.target.value});
  } 

  // login POST config
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        // use API key
        email: loginInput.email,
        password: loginInput.password,
    }
    login(formData, navigate);
    }

  // register login switch config
  const HandleClickClickHere = () => {
    toggleLogin();
    toggleSignup();
  }

  return (
    <>
      <LoginContainer $loginIsOpen={$loginIsOpen ? 1 : 0}>
        <LoginForm onSubmit={handleSubmit}>
          <LoginHeader>
            <LoginH1>Login</LoginH1>
            <LoginClose onClick={toggleLogin}/>
          </LoginHeader>
          <LoginInputWrap>
            <LoginInput type='email' name='email' onChange={handleInput} placeholder='Your email' required/>
            <InputError></InputError>
          </LoginInputWrap>
          <LoginInputWrap>
            <LoginInput type='password' name='password' onChange={handleInput} placeholder='Your password' required/>
            <InputError></InputError>
          </LoginInputWrap>
          <LoginInputWrap>
            <LoginSubmit type='submit'>Login</LoginSubmit>
          </LoginInputWrap>
          <LoginFooter>
            <LoginP>Create new account? <LoginSpan onClick={HandleClickClickHere}>Click here</LoginSpan></LoginP>
          </LoginFooter>
        </LoginForm>
      </LoginContainer>
    </>
  )
}

export default Login
