import React from 'react'
import { assets } from '../../assets/assets'
import {
    InfoContainer,
    InfoContent,
    InfoColumn1,
    InfoTopline,
    InfoHeading,
    InfoLead,
    InfoButtonContainer,
    InfoActionButtonR,
    InfoActionButtonS,
    InfoColumn2,
    InfoImage
} from './elements'

const Infosection = () => {
  return (
    <>
    <InfoContainer id='about'>
        <InfoContent>
            <InfoColumn1>
                <InfoTopline>About Us</InfoTopline>
                <InfoHeading>Indulge in Authentic Flavor: Where Every Bite Tells a Story</InfoHeading>
                <InfoLead>
                    Our journey began with a commitment to serving authentic, mouthwatering dishes inspired by traditional Filipino recipes. Step into our world and discover the heart and soul behind Oxhead Inasals
                </InfoLead>
                <InfoButtonContainer>
                    <InfoActionButtonR to='/about'>Read more</InfoActionButtonR>
                </InfoButtonContainer>
            </InfoColumn1>
            <InfoColumn2>
                <InfoImage src={assets.about_1} alt="about us"/>
            </InfoColumn2>
        </InfoContent>
    </InfoContainer>
    </>
  )
}

export default Infosection
