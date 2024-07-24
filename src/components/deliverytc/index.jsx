import React from 'react'
import { assets } from '../../assets/assets'
import {
    DeliveryTCContainer,
    DeliveryTCContent,
    DeliveryTCH3,
    DeliveryTCP,
    DeliveryTCUl,
    DeliveryTCLi
} from './elements'

const DeliverTC = () => {
  return (
    <>
    <DeliveryTCContainer>
        <DeliveryTCContent>
            <DeliveryTCH3>Oxhead Inasals Delivery Terms & Conditions</DeliveryTCH3>
            <DeliveryTCP>
                Welcome to Oxhead Inasals! Our delivery service is designed to bring the authentic flavors of our inasal dishes right to your doorstep. Please read our Delivery Terms & Conditions carefully to ensure a smooth and satisfying experience.
            </DeliveryTCP>
            <DeliveryTCH3>1. Delivery Area</DeliveryTCH3>
            <DeliveryTCP>
                Our delivery service is available within a specified radius from our restaurant location. Please enter your delivery address during the ordering process to confirm availability. If your address falls outside our delivery zone, we regret that we cannot fulfill your order.
            </DeliveryTCP>
            <DeliveryTCH3>2. Ordering</DeliveryTCH3>
            <DeliveryTCUl>
                <DeliveryTCLi>
                    Online Orders: Orders can be placed through our official website or mobile app. Simply select your desired items, add them to your cart, and proceed to checkout.
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Phone Orders: Alternatively, you can place an order by calling our delivery hotline at {assets.phone}.
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Order Confirmation: Once your order is placed, you will receive a confirmation email or SMS with the order details and estimated delivery time.
                </DeliveryTCLi>
            </DeliveryTCUl>
            <DeliveryTCH3>3. Delivery Times</DeliveryTCH3>
            <DeliveryTCUl>
                <DeliveryTCLi>
                    Standard Delivery: We aim to deliver your order within 45-60 minutes of confirmation. However, during peak hours or due to unforeseen circumstances, delivery times may vary.
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Scheduled Delivery: You can also schedule your delivery for a later time. Please specify your preferred delivery time when placing your order.
                </DeliveryTCLi>
            </DeliveryTCUl>
            <DeliveryTCH3>4. Delivery Fees</DeliveryTCH3>
            <DeliveryTCP>
                A delivery fee will be added to your order total. The fee varies based on your location and order size. The exact amount will be displayed during the checkout process.
            </DeliveryTCP>
            <DeliveryTCH3>5. Minimum Order Requirement</DeliveryTCH3>
            <DeliveryTCP>
                here is a minimum order requirement for delivery. This amount will be specified during the ordering process. 
            </DeliveryTCP>
            <DeliveryTCH3>6. Payment</DeliveryTCH3>
            <DeliveryTCUl>
                <DeliveryTCLi>
                    Online Payment: We accept various payment methods, including credit/debit cards, and digital wallets. Payment must be completed at the time of ordering.
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Cash on Delivery: Cash payments are accepted upon delivery. Please ensure you have the exact amount, as our delivery personnel may not have change.
                </DeliveryTCLi>
            </DeliveryTCUl>
            <DeliveryTCH3>7. Order Changes and Cancellations</DeliveryTCH3>
            <DeliveryTCUl>
                <DeliveryTCLi>
                    Changes: If you need to make changes to your order, please contact us immediately at (123) 456-7890. Changes cannot be guaranteed if the order is already being prepared.
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Cancellations: Orders can be cancelled within 10 minutes of placement. After this period, cancellations may not be accepted.
                </DeliveryTCLi>
            </DeliveryTCUl>
            <DeliveryTCH3>8. Delivery Issues</DeliveryTCH3>
            <DeliveryTCUl>
                <DeliveryTCLi>
                    Incorrect Orders: If you receive an incorrect order, please contact us immediately. We will rectify the mistake by sending the correct items or offering a refund.
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Missing Items: For any missing items in your order, please notify us as soon as possible. We will arrange for the missing items to be delivered or provide a refund.
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Quality Concerns: If you have concerns about the quality of the food delivered, please contact us promptly. We value your feedback and will address any issues to ensure your satisfaction.
                </DeliveryTCLi>
            </DeliveryTCUl>
            <DeliveryTCH3>9. Customer Responsibility</DeliveryTCH3>
            <DeliveryTCUl>
                <DeliveryTCLi>
                    Contact Information: Ensure that your contact details and delivery address are accurate when placing an order.
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Availability: Be available to receive your order at the designated delivery time. If our delivery personnel are unable to contact you or access your location, the order may be cancelled, and a fee may apply.
                </DeliveryTCLi>
            </DeliveryTCUl>
            <DeliveryTCH3>10. Promotions and Discounts</DeliveryTCH3>
            <DeliveryTCP>
                Promotional offers and discounts are subject to specific terms and conditions. These will be detailed in the respective promotion's description. Discounts cannot be combined with other offers unless explicitly stated.
            </DeliveryTCP>
            <DeliveryTCH3>11. Liability</DeliveryTCH3>
            <DeliveryTCP>
                Oxhead Inasals is not liable for any delays, delivery failures, or incorrect deliveries due to incorrect information provided by the customer or unforeseen circumstances beyond our control.
            </DeliveryTCP>
            <DeliveryTCH3>Contact Us</DeliveryTCH3>
            <DeliveryTCP>
                For any questions or concerns regarding our delivery service, please contact our customer service team at:
            </DeliveryTCP>
            <DeliveryTCUl>
                <DeliveryTCLi>
                    Phone: {assets.phone}
                </DeliveryTCLi>
                <DeliveryTCLi>
                    Email: {assets.email}
                </DeliveryTCLi>
            </DeliveryTCUl>
            <DeliveryTCH3>Thank you for choosing Oxhead Inasals for your delivery needs. We look forward to serving you!</DeliveryTCH3>
        </DeliveryTCContent>
    </DeliveryTCContainer>
    </>
  )
}

export default DeliverTC
