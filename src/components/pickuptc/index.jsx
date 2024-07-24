import React from 'react'
import { assets } from '../../assets/assets'
import {
    PickupTCContainer,
    PickupTCContent,
    PickupTCH3,
    PickupTCP,
    PickupTCUl,
    PickupTCLi
} from './elements'

const PickupTC = () => {
  return (
    <>
    <PickupTCContainer>
        <PickupTCContent>
            <PickupTCH3>Oxhead Inasals Pick-Up Terms & Conditions</PickupTCH3>
            <PickupTCP>
                Welcome to Oxhead Inasals! We are delighted to offer a convenient pick-up service for our valued customers. Please review our Pick-Up Terms & Conditions to ensure a seamless and enjoyable experience.
            </PickupTCP>
            <PickupTCH3>1. Ordering</PickupTCH3>
            <PickupTCUl>
                <PickupTCLi>
                    Online Orders: Place your pick-up order through our official website or mobile app. Select your desired items, add them to your cart, and choose the "Pick-Up" option at checkout.
                </PickupTCLi>
                <PickupTCLi>
                    Phone Orders: You can also place a pick-up order by calling our restaurant at {assets.phone}. Provide your order details and preferred pick-up time.
                </PickupTCLi>
            </PickupTCUl>
            <PickupTCH3>2. Order Confirmation</PickupTCH3>
            <PickupTCP>
                After placing your order, you will receive a confirmation email or SMS with your order details and the estimated pick-up time. Please review the information carefully to ensure accuracy.
            </PickupTCP>
            <PickupTCH3>3. Pick-Up Times</PickupTCH3>
            <PickupTCUl>
                <PickupTCLi>
                    Standard Pick-Up: Orders are typically ready for pick-up within 20-30 minutes. During peak hours or busy periods, preparation times may vary.
                </PickupTCLi>
                <PickupTCLi>
                    Scheduled Pick-Up: You may schedule your pick-up for a later time. Please specify your preferred pick-up time when placing your order.
                </PickupTCLi>
            </PickupTCUl>
            <PickupTCH3>4. Pick-Up Location</PickupTCH3>
            <PickupTCP>
                All pick-up orders must be collected from our restaurant at:
            </PickupTCP>
            <PickupTCUl>
                <PickupTCLi>
                    Address: {assets.address}
                </PickupTCLi>
            </PickupTCUl>
            <PickupTCH3>5. Payment</PickupTCH3>
            <PickupTCUl>
                <PickupTCLi>
                    Online Payment: We accept various payment methods, including credit/debit cards and digital wallets, for online orders. Payment must be completed at the time of ordering.
                </PickupTCLi>
                <PickupTCLi>
                    In-Person Payment: If you prefer, you can pay for your order upon arrival at the restaurant. We accept cash, credit/debit cards, and digital wallets.
                </PickupTCLi>
            </PickupTCUl>
            <PickupTCH3>6. Order Changes and Cancellations</PickupTCH3>
            <PickupTCUl>
                <PickupTCLi>
                    Changes: If you need to make changes to your order, please contact us immediately at {assets.phone}. Changes cannot be guaranteed if the order is already being prepared.
                </PickupTCLi>
                <PickupTCLi>
                    Cancellations: Orders can be cancelled within 10 minutes of placement. After this period, cancellations may not be accepted.
                </PickupTCLi>
            </PickupTCUl>
            <PickupTCH3>7. Pick-Up Procedure</PickupTCH3>
            <PickupTCUl>
                <PickupTCLi>
                    Identification: Upon arrival, please provide your name and order number for verification.
                </PickupTCLi>
                <PickupTCLi>
                    Review Your Order: Before leaving the restaurant, please review your order to ensure all items are correct. If there are any issues, inform our staff immediately.
                </PickupTCLi>
            </PickupTCUl>
            <PickupTCH3>8. Customer Responsibility</PickupTCH3>
            <PickupTCUl>
                <PickupTCLi>
                    Timely Pick-Up: Please arrive at the restaurant at your designated pick-up time. If you anticipate a delay, contact us as soon as possible.
                </PickupTCLi>
                <PickupTCLi>
                    Contact Information: Ensure your contact details are accurate when placing an order, as we may need to reach you regarding your order.
                </PickupTCLi>
            </PickupTCUl>
            <PickupTCH3>9. Quality and Satisfaction</PickupTCH3>
            <PickupTCP>
                We strive to prepare and package your order with the utmost care. If you encounter any issues with your order, please contact us promptly. We value your feedback and will address any concerns to ensure your satisfaction.
            </PickupTCP>
            <PickupTCH3>10. Promotions and Discounts</PickupTCH3>
            <PickupTCP>
                romotional offers and discounts are subject to specific terms and conditions. These will be detailed in the respective promotion's description. Discounts cannot be combined with other offers unless explicitly stated.
            </PickupTCP>
            <PickupTCH3>11. Liability</PickupTCH3>
            <PickupTCP>
                Oxhead Inasals is not liable for any delays or issues arising from circumstances beyond our control, including traffic, weather, or other unforeseen events.
            </PickupTCP>
            <PickupTCH3>Contact Us</PickupTCH3>
            <PickupTCP>
                For any questions or concerns regarding our pick-up service, please contact our customer service team at:
            </PickupTCP>
            <PickupTCUl>
                <PickupTCLi>
                    Phone: {assets.phone}
                </PickupTCLi>
                <PickupTCLi>
                    Email: {assets.email}
                </PickupTCLi>
            </PickupTCUl>
            <PickupTCH3>Thank you for choosing Oxhead Inasals for your dining needs. We look forward to serving you!</PickupTCH3>
            
        </PickupTCContent>
    </PickupTCContainer>
    </>
  )
}

export default PickupTC
