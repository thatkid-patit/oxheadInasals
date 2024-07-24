import React from 'react'
import { assets } from '../../assets/assets'
import {
    NavbarNullContainer,
    NavbarNullNav,
    Brand,
    BrandLogo,
    BrandName,
} from './elements'

const NavbarBack = ({back}) => {
  
  return (
    <>
    <NavbarNullContainer>
        <NavbarNullNav>
            <Brand to={back}>
              <BrandLogo src={assets.logo} alt='Oxhead Inasals'/>
              <BrandName>
                Back
              </BrandName>
            </Brand>
        </NavbarNullNav>
    </NavbarNullContainer>
    </>
  )
}

export default NavbarBack
