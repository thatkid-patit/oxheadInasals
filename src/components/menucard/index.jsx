import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import {
    MenuCardDisplay,
    MenuCardImageContainer,
    MenuCardImage,
    MenuCardInfo,
    MenuCardInfoWrapper,
    MenuCardNameRating,
    MenuCardName,
    MenuCardDescription,
    MenuCardPrice,
    MenuCardAdd,
    MenuCardCounter,
    MenuCardMinus,
    MenuCardCount,
    MenuCardPlus
} from './elements'
import Swal from 'sweetalert2'
import axios from 'axios'


const MenuCard = ({
    $id,
    $name,
    $categ,
    $desc,
    $price,
    $image,
}) => {
    const {axiosConfigA, logged} = useContext(StoreContext);

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

  return (
    <MenuCardDisplay>
        <MenuCardImageContainer>
            <MenuCardImage src={$image} alt={$name}/>
        </MenuCardImageContainer>
        <MenuCardInfo>
            <MenuCardInfoWrapper>
                <MenuCardNameRating>
                    <MenuCardName>{$name}</MenuCardName>
                </MenuCardNameRating>
                <MenuCardDescription>{$desc}</MenuCardDescription>
            </MenuCardInfoWrapper>
            <MenuCardPrice>Php {$price}</MenuCardPrice>
        </MenuCardInfo>
        
        <MenuCardAdd onClick={()=> addToCart({product_id: $id})}/>
    </MenuCardDisplay>
  )
}

export default MenuCard
