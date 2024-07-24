import React from 'react'
import MyOrderTableRow from  '../myordertablerow'
import {
    MyOrderCardContainer,
    MyOrderH5,
    MyOrderSection1,
    MyOrderHeader,
    MyOrderheading,
    MyOrderStatus,
    MyOrderP,
    MyOrderSection2,
    MyOrdertable,
} from './elements'

const MyOrderCard = () => {
  return (
    <>  
    <MyOrderCardContainer>
        <MyOrderH5>Order #79d9nmckcbsd890.98sc88</MyOrderH5>
        <MyOrderSection1>
            <MyOrderHeader>
                <MyOrderheading>Shipping Information</MyOrderheading>
                <MyOrderStatus>COMPLETED</MyOrderStatus>
            </MyOrderHeader>
            <MyOrderP>Juan dela Cruz</MyOrderP>
            <MyOrderP>09878745474</MyOrderP>
            <MyOrderP>Main rd, Tibag, Calapan City, Oriental Mindoro, 5200</MyOrderP>
        </MyOrderSection1>
        <MyOrderSection1>
            <MyOrderHeader>
                <MyOrderheading>Order Information</MyOrderheading>
            </MyOrderHeader>
            <MyOrderP>Order type: Delivery</MyOrderP>
            <MyOrderP>Delivery fee: Php 50</MyOrderP>
            <MyOrderP>Discount: Php 35</MyOrderP>
            <MyOrderP>Amount due: Php 515</MyOrderP>
            <MyOrderP>Payment Method: Cash</MyOrderP>
        </MyOrderSection1>
        <MyOrderSection2>
            <MyOrdertable>
                <tbody>
                    {
                        // loop through orderline
                        // orderlines.map((line, index) => {
                        //     if(line.orderref == $order.ref) {
                        //         return(
                        //             <MyOrderTableRow key={index} $line={line}/>
                        //         )
                        //     }

                        // }) 
                        <MyOrderTableRow/>
                    }
                </tbody>
            </MyOrdertable>
        </MyOrderSection2>
    </MyOrderCardContainer>
    </>
  )
}

export default MyOrderCard
