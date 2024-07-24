import React, {useEffect, useContext} from 'react'
import NavbarBack from '../../components/navbarback'
import Checkout from '../../components/checkout'
import {useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import Swal from 'sweetalert2'

const CheckoutPage = () => {

  const {logged} = useContext(StoreContext);

  const navigate = useNavigate();

  useEffect(()=> {
    if(!logged) {
      navigate("/");
      Swal.fire({
          icon: "warning",
          title: "You are not logged in!",
          showConfirmButton: false,
      })
      window.location.reload();
      return;
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

  return (
    <>
      <NavbarBack back="/cart"/>
      <Checkout/>
    </>
  )
}

export default CheckoutPage
