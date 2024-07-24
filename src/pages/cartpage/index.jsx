import React, { useContext, useEffect } from 'react'
import NavbarBack from '../../components/navbarback'
import Cart from '../../components/cart'
import { StoreContext } from '../../context/StoreContext';
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';

const CartPage = () => {

  const {logged} = useContext(StoreContext);

  const navigate = useNavigate();

  useEffect(()=> {
    if(!logged) {
      navigate("/");
      Swal.fire({
          icon: "warning",
          title: "You have to login to view cart!",
      })
      return;
  }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, [])

  return (
    <>
    <NavbarBack back="/"/>
    <Cart/>
    </>
  )
}

export default CartPage
