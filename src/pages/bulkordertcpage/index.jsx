import React, { useEffect } from 'react'
import NavbarBack from '../../components/navbarback'
import BulkorderTC from '../../components/bulkordertc'

const BulkorderTCPage = () => {

  useEffect(()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])
  
  return (
    <>
    <NavbarBack back="/"/>
    <BulkorderTC/>
    </>
  )
}

export default BulkorderTCPage
