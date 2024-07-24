import React, { useContext, useEffect, useState } from 'react'
import Homesection from '../../components/homesection'
import Infosection from '../../components/infosection'
import Cardsection from '../../components/cardsection'
import Menu from '../../components/menu'
import MenuDisplay from '../../components/menudisplay'
import { StoreContext } from '../../context/StoreContext'

const HomePage = ({toggleSignup}) => {

  const {logged, showProfile, showProducts, getCart} = useContext(StoreContext);

  const [category, setCategory] = useState(0);

  useEffect(()=> {
    showProducts();
    if(logged) {
      getCart();
      showProfile();
    }
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
    setTimeout(()=> {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 100)
  }, [])

  return (
    <>
      <Homesection toggleSignup={toggleSignup}/>
      <Infosection/>
      <Cardsection/>
      <Menu $category={category} $setCategory={setCategory}/>
      <MenuDisplay $category={category}/>
    </>
  )
}

export default HomePage
