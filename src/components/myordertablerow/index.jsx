import React from 'react'
import { MyOrderTableTdata, MyOrderYableTdataWrap } from './elements'

const MyOrderTableRow = () => {
  return (
    <>  
    <MyOrderYableTdataWrap>
        <MyOrderTableTdata>Chicken</MyOrderTableTdata>
        <MyOrderTableTdata>5 orders</MyOrderTableTdata>
        <MyOrderTableTdata>Php 500</MyOrderTableTdata>
    </MyOrderYableTdataWrap>
    </>
  )
}

export default MyOrderTableRow
