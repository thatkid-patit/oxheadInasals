import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {
  CartItemLineWrap,
  CartItemLineSection1,
  CartItemLineSection2,
  CartItemLineImage,
  CartItemP,
  CartItemQtyWrap,
  CartItemQtyMinus,
  CartItemQtyInput,
  CartItemQtyPlus
} from './elements'

const CartItemLine = ({$id, $image, $name, $price, $qty}) => {

  const {axiosConfigA, logged} = useContext(StoreContext);

  const navigate = useNavigate();

  // add to cart
  const addToCart = formData => {
    axios.get('/sanctum/csrf-cookie').then(res=> {
        axios.post(`/api/cartv2/addtocart`, formData, axiosConfigA).then(res => {
            if(res.data.status === true) {
                Swal.fire({
                    icon: "success",
                    title: "Cart updated!",
                    showConfirmButton: false,
                })
                setTimeout(()=>{
                  window.location.reload();
                },1000)
                return;
            }
            if(res.data.status === false) {
                Swal.fire({
                  icon: "warning",
                  title: res.data.message,
                  showConfirmButton: false,
                })
            } else {
                console.log(res.data);
            }
        })
    })
}

const removeFromCart = formData => {
  axios.get('/sanctum/csrf-cookie').then(res=> {
      axios.put(`/api/cartv2/removefromcart`, formData, axiosConfigA).then(res => {
          if(res.data.status === true) {
              Swal.fire({
                  icon: "success",
                  title: "Cart updated!",
                  showConfirmButton: false,
              })
              setTimeout(()=>{
                window.location.reload();
              },1000)
          }
          if(res.data.status === false) {
              Swal.fire({
                icon: "warning",
                title: res.data.message,
                showConfirmButton: false,
              })
          } else {
              console.log(res.data);
          }
      })
  })
}

const updateCartItems = (formData) => {
  axios.get('/sanctum/csrf-cookie').then(res=> {
      axios.put(`/api/cartv2/updatecart`, formData, axiosConfigA).then(res => {
          if(res.data.status === true) {
              Swal.fire({
                  icon: "success",
                  title: "Cart Updated!",
                  showConfirmButton: false,
              })
              setTimeout(()=>{
                window.location.reload();
              },1000)
          }
          if(res.data.status === false) {
              Swal.fire({
                icon: "warning",
                title: res.data.message,
                showConfirmButton: false,
              })
          } else {
              console.log(res.data);
          }
      })
  })
}

  return (
    <>
      <CartItemLineWrap>
        <CartItemLineSection1>
          <CartItemLineImage src={$image}/>
        </CartItemLineSection1>
        <CartItemLineSection2>
          <CartItemP>{$name}</CartItemP>
          <CartItemP>Php {$qty * $price}</CartItemP>
          <CartItemQtyWrap>
            <CartItemQtyMinus onClick={()=> removeFromCart({product_id: $id})}/>
            <CartItemQtyInput onChange={e => updateCartItems({product_id: $id, quantity: Number(e.target.value)})} value={$qty}/>
            <CartItemQtyPlus onClick={()=> addToCart({product_id: $id})}/>
          </CartItemQtyWrap>
        </CartItemLineSection2>
      </CartItemLineWrap>
    </>
  )
}

export default CartItemLine
