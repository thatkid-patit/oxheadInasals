import React,{ useContext, useEffect } from 'react'
import { StoreContext } from '../../context/StoreContext'
import MyOrderCard from '../myordercard'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import {
    MyAccountNav,
    AdVideo,
    MyAccountContainer,
    MyAccountContent,
    MyAccountHeading,
    MyAccountHeading2,
    MyAccountSubWrap,
    MyAccountSubWrap2,
    MyAccountSubHeading,
    MyAccountSubHeading2,
    MyAccountHr,
    MyOrders
} from './elements'

const MyAccount = ({
    $orderStatus, 
    $setOrderStatus,
    toggleUpdateName,
    toggleUpdatePhone,
    toggleUpdateEmail,
    toggleUpdateAddress,
    toggleUpdatePassword
}) => {

    const {logged, profile, logout, order_status} = useContext(StoreContext);

    const navigate = useNavigate();

  return (
    <>
        <MyAccountContainer>
            <MyAccountNav>
                <AdVideo autoPlay loop muted src={assets.hero_1} type='video/mp4'/>
            </MyAccountNav>
            <MyAccountContent>
                <MyAccountHeading onClick={toggleUpdateName}>{profile.firstname} {profile.lastname}</MyAccountHeading>
                <MyAccountSubWrap>
                    <MyAccountSubHeading onClick={toggleUpdatePhone}>{profile.phone}</MyAccountSubHeading>
                    <MyAccountSubHeading onClick={toggleUpdateEmail}>{profile.email}</MyAccountSubHeading>
                    <MyAccountSubHeading onClick={toggleUpdateAddress}>{profile.address} {profile.city} {profile.zipcode}</MyAccountSubHeading>
                    <MyAccountSubHeading onClick={toggleUpdatePassword}>Change password</MyAccountSubHeading>
                    <MyAccountSubHeading onClick={()=>logout(navigate)}>Logout</MyAccountSubHeading>
                </MyAccountSubWrap>
                <MyAccountHr/>
                <MyAccountHeading2>My Purchases</MyAccountHeading2>
                <MyAccountSubWrap2>
                    {
                        // loop through status
                        order_status.map((status, index) => {
                            return(
                                <MyAccountSubHeading2 
                                    key={index}
                                    onClick={()=>$setOrderStatus(s=>s===status.id?1:status.id)}
                                    className={$orderStatus===status.id?"active":""}
                                    >{status.name}
                                </MyAccountSubHeading2>
                            )
                        })
                    }
                </MyAccountSubWrap2>
                <MyOrders>
                    {
                        // loop through orders
                        // orders.map((order, index) => {
                        //     if($orderStatus === 0 || $orderStatus === order.status) {
                        //         return(
                        //             <MyOrderCard key={index} $order={order}/>
                        //         )
                        //     }   
                        // })
                        <MyOrderCard/>
                    }
                </MyOrders>
            </MyAccountContent>
        </MyAccountContainer>
    </>
  )
}

export default MyAccount
