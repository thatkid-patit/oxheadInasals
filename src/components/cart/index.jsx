import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import {
  CartContainer,
  CartContent,
  CartItemCard,
  CardItemSubTotal,
  CardH3,
  CardSubtotalCheckout,
  CardButtonCheckoutR,
  CartZero
} from './elements'
import CartItemLine from '../cartitemline';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';

const Cart = () => {

    const {
      products, 
      cartItems, 
      getCartSubtotal,
      getCartItemCount
    } = useContext(StoreContext);

    const [cart, setCart] = useState([]);
    var subtotal = 0;
    var subcount = 0;

     // view cart
     const getCart = () => {
      axios.get(`/api/cartv2/index`).then(res => {
          if(res.data.status === true) {
            setCart(res.data.cart);   
          } else {
              console.log(res.data.message);
          }
      })
  }

    useEffect(()=>{
      getCart();
    },[])

  return (
    <>
        <CartContainer>
            <CartContent>
              <CartItemCard>
                {
                  cart.map((item)=>{
                    if(item.quantity > 0) {
                      subtotal += item.product.price * item.quantity;
                      subcount += item.quantity;
                      return (
                        <CartItemLine 
                          key={item.id}
                          $id={item.product.id}
                          $name={item.product.name}
                          $price={item.product.price}
                          $image={`https://oxheadapi.wd99p.com/${item.product.image}`}
                          $qty={item.quantity}
                        />
                      )
                    }
                  })

                  
                }
              </CartItemCard>
              {
                subcount === 0
                  ? <CartZero>No items in the cart</CartZero>
                  : <CardItemSubTotal>
                      <CardH3>Subtotal: Php {subtotal}</CardH3>
                      <CardSubtotalCheckout>
                        <CardH3>Php {subtotal}</CardH3>
                        <CardButtonCheckoutR to='/checkout'>Checkout({subcount})</CardButtonCheckoutR>
                      </CardSubtotalCheckout>
                    </CardItemSubTotal>
              }
            </CartContent>
        </CartContainer>
    </>
  )
}

export default Cart
