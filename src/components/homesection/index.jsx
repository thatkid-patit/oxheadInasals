import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import {
  HomeContainer,
  HomeBackground,
  HomeVideo,
  HomeContent,
  HomeHeading,
  HomeLead,
  HomeButtonContainer,
  HomeActionButtonS,
  HomeActionButtonR
} from './elements'
import { StoreContext } from '../../context/StoreContext'

const Homesection = ({toggleSignup}) => {

  const {logged} = useContext(StoreContext);
  return (
    <>
    <HomeContainer id="home">
      <HomeBackground>
        <HomeVideo autoPlay loop muted src={assets.hero_2} type='video/mp4'/>
      </HomeBackground>
      <HomeContent>
        <HomeHeading>Sizzle Up Your Day with Us!</HomeHeading>
        <HomeLead>
          {
            logged 
              ? "Order now and satisfy your cravings with our fast and fresh delivery"
              : "Create an account and get 15% Off your first delivery order"
          }
        </HomeLead>
        <HomeButtonContainer>
          {
            logged 
              ? <HomeActionButtonS  smooth={true} duration={500} spy={true} exact="true" to='menu'>Explore Menu</HomeActionButtonS>
              : <HomeActionButtonR onClick={toggleSignup}>Get Started</HomeActionButtonR>
          }
        </HomeButtonContainer>
      </HomeContent>
    </HomeContainer>
    </>
  )
}

export default Homesection
