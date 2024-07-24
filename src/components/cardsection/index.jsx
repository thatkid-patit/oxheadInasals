import React from 'react'
import { assets } from '../../assets/assets'
import {
    CardContainer,
    CardContent,
    CardTopline,
    CardWrapper,
    Card,
    CardImage,
    CardHeading,
    CardTitle,
    CardLead
} from './elements'

const Cardsection = () => {
  return (
    <CardContainer id="services">
        <CardContent>
            <CardTopline>Our Services</CardTopline>
            <CardHeading>
            Discover the ultimate where sizzling flavors meet impeccable service, ensuring every meal is a memorable delight
            </CardHeading>
            <CardWrapper>
                <Card to='/deliveryT&C'>
                    <CardImage src={assets.service_1} alt='delivery'/>
                    <CardTitle>Delivery</CardTitle>
                    <CardLead>
                        From grill favorites to mouthwatering sides, bring the taste of excellence straight to your door
                    </CardLead>
                </Card>
                <Card to='/pickupT&C'>
                    <CardImage src={assets.service_2} alt='pick up'/>
                    <CardTitle>Pick Up</CardTitle>
                    <CardLead>
                        Enjoy freshly grilled favorites and savory sides, ready when you are
                    </CardLead>
                </Card>
                <Card to='/bulkorderT&C'>
                    <CardImage src={assets.service_3} alt='bulkorder'/>
                    <CardTitle>Bulk Orders</CardTitle>
                    <CardLead>
                        Planning a party or event? Enjoy our mouth-watering grilled delights with our exclusive bulk order promotion!
                    </CardLead>
                </Card>
            </CardWrapper>
        </CardContent>
    </CardContainer>
  )
}

export default Cardsection
