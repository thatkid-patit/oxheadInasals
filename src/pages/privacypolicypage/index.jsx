import React, { useEffect } from 'react'
import NavbarBack from '../../components/navbarback'
import PrivacyPolicy from '../../components/privacypolicycontent'

const PrivacyPolicyPage = () => {

  useEffect(()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])
  
  return (
    <>
    <NavbarBack back="/"/>
    <PrivacyPolicy/>
    </>
  )
}

export default PrivacyPolicyPage
