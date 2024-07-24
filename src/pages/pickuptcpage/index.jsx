import React, { useEffect } from 'react'
import NavbarBack from '../../components/navbarback'
import PickupTC from '../../components/pickuptc'

const PickupTCPage = () => {

  useEffect(()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])
  
  return (
    <>
    <NavbarBack back="/"/>
    <PickupTC/>
    </>
  )
}

export default PickupTCPage
