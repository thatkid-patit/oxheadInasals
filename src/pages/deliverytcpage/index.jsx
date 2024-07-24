import React, { useEffect } from 'react'
import NavbarBack from '../../components/navbarback'
import DeliverTC from '../../components/deliverytc'

const DeliveryTCPage = () => {

  useEffect(()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])
  
  return (
    <>
    <NavbarBack back="/"/>
    <DeliverTC/>
    </>
  )
}

export default DeliveryTCPage
