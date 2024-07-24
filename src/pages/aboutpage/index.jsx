import React, { useEffect } from 'react'
import NavbarBack from '../../components/navbarback'
import AboutContent from '../../components/aboutcontent'

const AboutPage = () => {

  useEffect(()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

  return (
    <>
    <NavbarBack back="/"/>
    <AboutContent/>
    </>
  )
}

export default AboutPage
