import React, { useContext, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2';
import {
    CheckoutContainer,
    CheckoutContent,
    CheckoutDeliveryForm,
    CheckoutH5,
    CheckoutDoubleInput,
    DoubleInput,
    CheckoutSingleInput,
    SingleInput,
    Inputlabel,
    CheckoutPaymentForm,
    OrderSummaryDetails,
    OrderSummaryNormal,
    OrderSummaryBold,
    CheckoutSelect,
    CheckoutOption,
    CheckoutCash,
    CheckoutPayment,
    CheckoutForm,
    CheckoutSubmit,
    CheckoutSingleInputCheck
} from './elements'
import { StoreContext } from '../../context/StoreContext';

const Checkout = () => {

    const navigate = useNavigate()

    const [promoCode, setPromoCode] = useState("");

    const {
        getPromoValue,
        getOrderType,
        orderType,
        getOrderTotal,
        axiosConfigA
    } = useContext(StoreContext);

    const [cart, setCart] = useState([]);
    var subtotal = 0;
    var subcount = 0;
    var deliveryfee = 0;

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

  const [checkoutInput, setCheckoutInput] = useState({});

  //input congig
  const handleChange = (e) => {
    setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value});
  }

  //checkout POST
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
        // use API key
        recipient: checkoutInput.recipient,
        phone: checkoutInput.phone,
        request: checkoutInput.request,
        address: checkoutInput.address,
        city: checkoutInput.city,
        zipcode: checkoutInput.zipcode,
        ordertype: checkoutInput.ordertype == 1?"Pick up":"Delivery",
        subtotal: subtotal,
        deliveryfee: orderType == 2?50:0,
        discount: promoCode == "" ?"":getPromoValue(promoCode, subtotal),
        grandtotal: getOrderTotal(subtotal, getPromoValue(promoCode, subtotal)),
        status: 1,
    }

    axios.get('/sanctum/csrf-cookie').then(res=> {
        axios.post(`/api/checkoutv2/placeorder`, formData, axiosConfigA).then(res => {
            if(res.data.status === true) {
                Swal.fire({
                    icon: "success",
                    title: "Awesome",
                    text: res.data.message,
                })
                setTimeout(()=>{
                    navigate('/myaccount');
                },1500)
                return;
            } else {
                if(res.data.validation_errors === false) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops",
                        text: res.data.validation_errors.messages,
                    })
                }
                if(res.data.status === false) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops",
                        text: res.data.message,
                    })
                }
            }         
        })
        .catch(err=>{
            console.log(err.message);
        }
        )
    })

  }

  return (
    <>
        <CheckoutContainer>
            <CheckoutContent>
                <CheckoutForm>
                    <CheckoutDeliveryForm>
                        <CheckoutH5>Delivery Information</CheckoutH5>
                        <CheckoutDoubleInput>
                            <DoubleInput
                                onChange={handleChange}
                                name="recipient"
                                placeholder="Recipient's name"
                                type="text"
                                required
                            />
                            <DoubleInput
                                onChange={handleChange}
                                name="phone"
                                placeholder="Recipient's phone numbers"
                                type="phone"
                                required
                            />
                        </CheckoutDoubleInput>
                        <CheckoutSingleInput>
                            <SingleInput 
                                onChange={handleChange}
                                name="request"
                                placeholder="Special instruction/request"
                                type="text"
                            />
                        </CheckoutSingleInput>
                        <CheckoutSingleInput>
                            <SingleInput
                                onChange={handleChange}
                                name="address"
                                placeholder="Recipient's street address"
                                type="text"
                                required
                            />
                        </CheckoutSingleInput>
                        <CheckoutDoubleInput>
                            <DoubleInput
                                onChange={handleChange}
                                name="city"
                                placeholder="Recipient's city/town"
                                type="text"
                                required
                            />
                            <DoubleInput
                                onChange={handleChange}
                                name="zipcode"
                                placeholder="Recipient's zipcode"
                                type="number"
                                required
                            />
                        </CheckoutDoubleInput>
                        {/* <CheckoutSingleInputCheck>
                            <SingleInput
                                type='checkbox' 
                            />
                            <Inputlabel>Use saved address</Inputlabel>
                            
                        </CheckoutSingleInputCheck> */}
                        <CheckoutSingleInput>
                            <CheckoutH5>Order Summary</CheckoutH5>
                            {
                                cart.map((item)=>{
                                    if(item.quantity > 0) {
                                        subtotal += item.product.price * item.quantity;
                                        subcount += item.quantity;
                                        return;
                                    }
                                })
                            }
                            <OrderSummaryDetails>
                                <OrderSummaryNormal>Subtotal</OrderSummaryNormal>
                                <OrderSummaryNormal>Php {subtotal}</OrderSummaryNormal>
                            </OrderSummaryDetails>
                            {
                                orderType == "2"
                                    ?   <OrderSummaryDetails>
                                            <OrderSummaryNormal>Delivery Fee</OrderSummaryNormal>
                                            <OrderSummaryNormal>Php 50</OrderSummaryNormal>
                                        </OrderSummaryDetails>
                                    :   <></>
                            }
                            {
                                promoCode == ""
                                    ?   <></>
                                    :   <OrderSummaryDetails>
                                            <OrderSummaryNormal>Promo Code: {promoCode}</OrderSummaryNormal>
                                            <OrderSummaryNormal>
                                                {
                                                    getPromoValue(promoCode, subtotal) == "" 
                                                        ?   "Invalid/Expired code"
                                                        :   `Php -${getPromoValue(promoCode, subtotal)}`
                                                }
                                            </OrderSummaryNormal>
                                        </OrderSummaryDetails>
                            }
                            <OrderSummaryDetails>
                                <OrderSummaryBold>Total</OrderSummaryBold>
                                <OrderSummaryBold>
                                    {
                                        `Php ${getOrderTotal(subtotal, getPromoValue(promoCode, subtotal))}`
                                    }
                                </OrderSummaryBold>
                            </OrderSummaryDetails>
                        </CheckoutSingleInput>
                    </CheckoutDeliveryForm>
                    <CheckoutPaymentForm>
                        <CheckoutSingleInput>
                            <Inputlabel>Order Type</Inputlabel>
                            <CheckoutSelect
                                name="ordertype"
                                onChange={e => getOrderType(e.target.value)}
                                required
                            >
                                <CheckoutOption value="0">--Select--</CheckoutOption>
                                <CheckoutOption value="1">Pick Up</CheckoutOption>
                                <CheckoutOption value="2">Delivery</CheckoutOption>
                            </CheckoutSelect>
                        </CheckoutSingleInput>
                        {/* <CheckoutSingleInput>
                            <Inputlabel>Payment Method</Inputlabel>
                            <CheckoutSelect 
                                onChange={e => getPaymentMethod(e.target.value)}
                                required
                            >
                                <CheckoutOption value="0">--Select--</CheckoutOption>
                                <CheckoutOption value="1">Cash</CheckoutOption>
                                <CheckoutOption value="2">Credit Card</CheckoutOption>
                            </CheckoutSelect>
                        </CheckoutSingleInput> */}
                        <CheckoutSingleInput>
                            <Inputlabel>Enter Voucher/Promo Code</Inputlabel>
                            <SingleInput
                                onChange={e => setPromoCode(e.target.value)}
                                placeholder="Enter code"
                                type="text"
                            />
                        </CheckoutSingleInput>
                        <CheckoutCash onClick={handleSubmit}>Place Order</CheckoutCash>
                        {/* {
                            paymentMethod == "0"
                                ?   <></>
                                :   <CheckoutSubmit>
                                        {
                                            paymentMethod == "1" 
                                                ?   <CheckoutCash>Place Order</CheckoutCash>
                                                :   <CheckoutPayment>Proceed to Payment</CheckoutPayment>
                                        }
                                    </CheckoutSubmit>
                        } */}
                    </CheckoutPaymentForm>
                </CheckoutForm>
            </CheckoutContent>
        </CheckoutContainer>
    </>
  )
}

export default Checkout
