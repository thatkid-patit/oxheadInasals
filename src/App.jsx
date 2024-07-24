import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import HomePage from './pages/homepage'
import Footer from './components/footer'
import Login from './components/loginpopup'
import Signup from './components/signuppopup'
import AboutPage from './pages/aboutpage'
import DeliveryTCPage from './pages/deliverytcpage'
import PickupTCPage from './pages/pickuptcpage'
import BulkorderTCPage from './pages/bulkordertcpage'
import PrivacyPolicyPage from './pages/privacypolicypage'
import CartPage from './pages/cartpage'
import CheckoutPage from './pages/checkoutpage'
import MyAccountPage from './pages/myaccountpage'
import UpdateName from './components/updatenamepopup'
import UpdatePhone from './components/updatephonepopup'
import UpdateEmail from './components/updateemailpopup'
import UpdateAddress from './components/updateaddresspopup'
import UpdatePassword from './components/updatepasswordpopup'
import axios from 'axios'

axios.defaults.baseURL = "https://oxheadapi.wd99p.com";
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})

const App = () => {

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  }

  const [signupIsOpen, setSignupIsOpen] = useState(false);
  const toggleSignup = () => {
    setSignupIsOpen(!signupIsOpen);
  }

  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const toggleLogin = () => {
    setLoginIsOpen(!loginIsOpen);
  }

  const [updateNameIsOpen, setUpdateNameIsOpen] = useState(false);
  const toggleUpdateName = () => {
    setUpdateNameIsOpen(!updateNameIsOpen);
  }

  const [updatePhoneIsOpen, setUpdatePhoneIsOpen] = useState(false);
  const toggleUpdatePhone = () => {
    setUpdatePhoneIsOpen(!updatePhoneIsOpen);
  }

  const [updateEmailIsOpen, setUpdateEmailIsOpen] = useState(false);
  const toggleUpdateEmail = () => {
    setUpdateEmailIsOpen(!updateEmailIsOpen);
  }

  const [updateAddressIsOpen, setUpdateAddressIsOpen] = useState(false);
  const toggleUpdateAddress = () => {
    setUpdateAddressIsOpen(!updateAddressIsOpen);
  }

  const [updatePasswordIsOpen, setUpdatePasswordIsOpen] = useState(false);
  const toggleUpdatePassword = () => {
    setUpdatePasswordIsOpen(!updatePasswordIsOpen);
  }

  let navbar = '';
  if(window.location.pathname == '/about' || window.location.pathname == '/myaccount') {
    navbar = <></>
  } else {
    navbar = <Navbar toggleSidebar={toggleSidebar} toggleLogin={toggleLogin}/>
  }

  return (

    <>
    <BrowserRouter>
      {navbar}
      <Sidebar 
        $sidebarIsOpen={sidebarIsOpen?1:0} 
        toggleSidebar={toggleSidebar} 
        toggleLogin={toggleLogin}
      />

      <Login 
        $loginIsOpen={loginIsOpen?1:0} 
        toggleLogin={toggleLogin} 
        toggleSignup={toggleSignup}
      />
      <Signup 
        $signupIsOpen={signupIsOpen?1:0} 
        toggleSignup={toggleSignup} 
        toggleLogin={toggleLogin}
      />

      <UpdateName
        $updateNameIsOpen={updateNameIsOpen?1:0}
        toggleUpdateName={toggleUpdateName}
      />
      <UpdatePhone
        $updatePhoneIsOpen={updatePhoneIsOpen?1:0}
        toggleUpdatePhone={toggleUpdatePhone}
      />
      <UpdateEmail
        $updateEmailIsOpen={updateEmailIsOpen?1:0}
        toggleUpdateEmail={toggleUpdateEmail}
      />
      <UpdateAddress
        $updateAddressIsOpen={updateAddressIsOpen?1:0}
        toggleUpdateAddress={toggleUpdateAddress}
      />
      <UpdatePassword
        $updatePasswordIsOpen={updatePasswordIsOpen?1:0}
        toggleUpdatePassword={toggleUpdatePassword}
      />

      <Routes>
        <Route path="/" element={
            <HomePage
              toggleSignup={toggleSignup}
            />
        }/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/deliveryT&C" element={<DeliveryTCPage/>}/>
        <Route path="/pickupT&C" element={<PickupTCPage/>}/>
        <Route path="/bulkorderT&C" element={<BulkorderTCPage/>}/>
        <Route path="/privacy&policy" element={<PrivacyPolicyPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/myaccount" element={
          <MyAccountPage
            toggleUpdateName={toggleUpdateName}
            toggleUpdatePhone={toggleUpdatePhone}
            toggleUpdateEmail={toggleUpdateEmail}
            toggleUpdateAddress={toggleUpdateAddress}
            toggleUpdatePassword={toggleUpdatePassword}
          />
        }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
