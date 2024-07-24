import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2'
import { 
    category,

    order_status,
    vouchers
 } from '../assets/test'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    var logged = "";
    if(!localStorage.getItem('auth_token')) {
        logged = false;
    } else {
        logged = true;
    }

    const axiosConfigA = {
        headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin' : '*'}
    };

    const axiosConfigB = {
        headers: {"Content-Type": "multipart/form-data", 'Access-Control-Allow-Origin' : '*'}
    };

    //signup POST
    const signUp = (formData, toggleSignup, toggleLogin) => {
        axios.get('/sanctum/csrf-cookie').then(res=> {
            axios.post(`/api/customerv2/register`, formData, axiosConfigA).then(res => {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                    })
                    toggleSignup();
                    toggleLogin();
                } else {
                    if(res.data.validation_errors.email) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.email,
                        })
                    }
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                }         
            });
        })
    }

    //login POST
    const login = (formData, navigate) => {
        axios.get('/sanctum/csrf-cookie').then(res=> {
            axios.post(`/api/customerv2/login`, formData, axiosConfigA).then(res => {
                if(res.data.status === true) {
                    localStorage.setItem('auth_token', res.data.token);
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                    })
                    window.location.reload();
                    navigate('/');
                    return;
                }  
                if(res.data.status === false) {
                    //credential errors
                    Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: res.data.message,
                    })
                } else {
                    //validation errors
                    if(res.data.validation_errors.email) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.email,
                        })
                    }
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                  }         
              });
            })
    }

    //profile GET
    const [profile, setProfile] = useState({});
    const showProfile = () => {
        axios.get(`/api/customerv2/profile`).then(res => {
            if(res.data.status === true) {
                setProfile(res.data.profile);
            } else {
                console.log(res.data.message);
            }
        })
    }

    //update profile POST
    const updateProfile = (formData, toggle) => {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`api/customerv2/update/${profile.id}?_method=put`, formData, axiosConfigA).then(res=> {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                        showConfirmButton: false,
                    })
                    setTimeout(()=>{
                        toggle();
                        window.location.reload();
                    },1500);
                }
                if(res.data.status === false) {
                    //credential errors
                    Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: res.data.message,
                    })
                } else {
                    //validation errors
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                  }
            })
        })
    }

    //update email POST
    const updateEmail = (formData, toggle) => {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`api/customerv2/e/update/${profile.id}?_method=put`, formData, axiosConfigA).then(res=> {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                        showConfirmButton: false,
                    })
                    setTimeout(()=>{
                        toggle();
                        window.location.reload();
                    },1500);
                }
                if(res.data.status === false) {
                    //credential errors
                    Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: res.data.message,
                      showConfirmButton: false,
                    })
                } else {
                    //validation errors
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                    if(res.data.validation_errors.email) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.email,
                        })
                    }
                  }
            })
        })
    }

    //change password POST
    const changePassword = (formData, toggle, navigate) => {
        axios.get('/sanctum/csrf-cookie').then(res => {
            axios.post(`api/customerv2/p/change/${profile.id}?_method=put`, formData, axiosConfigA).then(res=> {
                if(res.data.status === true) {
                    Swal.fire({
                        icon: "success",
                        title: "Awesome",
                        text: res.data.message,
                        showConfirmButton: false,
                    })
                    localStorage.removeItem('auth_token');
                    setTimeout(()=>{
                        toggle();
                        window.location.reload();
                        navigate('/')
                    }, 1500);
                }
                if(res.data.status === false) {
                    //credential errors
                    Swal.fire({
                      icon: "warning",
                      title: "Oops",
                      text: res.data.message,
                    })
                } else {
                    //validation errors
                    if(res.data.validation_errors.password) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password,
                        })
                    }
                    if(res.data.validation_errors.password_new) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops",
                            text: res.data.validation_errors.password_new,
                        })
                    }
                  }
            })
        })
    }

    //logout GET
    const logout = (navigate) => {
        axios.get(`/api/customerv2/logout`).then(res => {
            if(res.data.status === true) {
                localStorage.removeItem('auth_token');
                Swal.fire({
                    icon: "success",
                    title: "Awesome",
                    text: res.data.message,
                    showConfirmButton: false,
                })
                setTimeout(()=>{
                    navigate('/');
                    window.location.reload();
                }, 1500)
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops",
                    text: "Unable to logout",
                })
            }
        })
    }

    // show products GET
    const [products, setProducts] = useState([]);
    const showProducts = () => {
        axios.get(`/api/productv2/index`).then(res => {
            if(res.data.status === true) {
                setProducts(res.data.products);
            } else {
                console.log(res.data.message);
            }
        })
    }

    // cart
    const [cartItems, setCartItems] = useState(null);

    // cart count
    const [cartItemCount, setCartItemCount] = useState(0);
    const getCartItemCount = () => {
        // if(!cartItems) return;
        // let count = 0;
        // for(let i = 0; i <= cartItems.length; i++) {
        //     count += cartItems[0].quantity;
        //     setCartItemCount(cartItemCount);
        // }
    }

    // view cart
    const getCart = () => {
        axios.get(`/api/cartv2/index`).then(res => {
            if(res.data.status === true) {
                setCartItems(res.data.cart);   
            } else {
                console.log(res.data.message);
            }
        })
    }

    // add to cart
    const addToCart = formData => {
        if(!logged) {
            Swal.fire({
                icon: "warning",
                title: "You have to login to add to cart!",
            })
            return;
        }
        axios.get('/sanctum/csrf-cookie').then(res=> {
            axios.post(`/api/cartv2/addtocart`, formData, axiosConfigA).then(res => {
                if(res.data.status === true) {
                    getCart();
                    Swal.fire({
                        icon: "success",
                        title: "Added to cart!",
                        showConfirmButton: false,
                    })
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
            axios.post(`/api/cartv2/removefromcart`, formData, axiosConfigA).then(res => {
                if(res.data.status === true) {
                    getCart();
                    Swal.fire({
                        icon: "success",
                        title: "Cart updated!",
                        showConfirmButton: false,
                    })
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
            axios.post(`/api/cartv2/updatecart`, formData, axiosConfigA).then(res => {
                if(res.data.status === true) {
                    getCart();
                    Swal.fire({
                        icon: "success",
                        title: "Cart Updated!",
                        showConfirmButton: false,
                    })
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

    const getCartSubtotal = () => {
        // let total = 0;
        // cartItems.map((_, item) => {
        //     if(item.quantity > 0) {
        //         let price = products.find(product => product.id === item.product_id);
        //         total += item.quantity * price.price;
        //     }
        //     return total;
        // })
    }

    const [orderType, setOrderType] = useState("");
    const getOrderType = type => {
        setOrderType(type);
    }

    const [paymentMethod, setPaymentMethod] = useState("");
    const getPaymentMethod = method => {
        setPaymentMethod(method);
    }

    const getPromoValue = (code, subtotal) => {
        let discountVal = "";
        let discount = vouchers.find(voucher => voucher.code == code);
        if(discount == undefined) {
            return "";
        } 
        if((discount.value*subtotal > discount.cap)) {
            discountVal = discount.cap;
            return discountVal;
        } else {
            discountVal = discount.value*subtotal;
            return discountVal;
        }   
    }

    const [orderTotal, setOrderTotal] = useState("");
    const getOrderTotal = (subtotal, voucher) => {
        let total = subtotal - voucher + (orderType == 2 ? 50 : 0);
        return total;
    }

    const contextValue = {
        signUp,
        login,
        logged,
        showProfile,
        profile,
        updateProfile,
        updateEmail,
        changePassword,
        logout,

        category,
        showProducts,
        products,

        axiosConfigA,
        axiosConfigB,

        getCart,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItems,
        getCartSubtotal,
        getCartItemCount,
        cartItemCount,
        
        order_status,
        
        

        
        
        getPromoValue,
        getOrderType,
        orderType,
        getPaymentMethod,
        paymentMethod,
        getOrderTotal
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider