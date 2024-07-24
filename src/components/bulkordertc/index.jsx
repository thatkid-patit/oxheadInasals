import React from 'react'
import { assets } from '../../assets/assets'
import {
    BulkorderTCContainer,
    BulkorderTCContent,
    BulkorderTCH3,
    BulkorderTCP,
    BulkorderTCUl,
    BulkorderTCLi
} from './elements'

const BulkorderTC = () => {
  return (
    <>
    <BulkorderTCContainer>
        <BulkorderTCContent>
            <BulkorderTCH3>Oxhead Inasals Bulk Order Terms & Conditions</BulkorderTCH3>
            <BulkorderTCP>
                Thank you for considering Oxhead Inasals for your bulk order needs. We are excited to provide our delicious inasal dishes for your special events, corporate gatherings, or any large group occasion. Please review our Bulk Order Terms & Conditions to ensure a smooth and successful ordering experience.
            </BulkorderTCP>
            <BulkorderTCH3>1. Placing a Bulk Order</BulkorderTCH3>
            <BulkorderTCUl>
                <BulkorderTCLi>
                    Advance Notice: Bulk orders must be placed at least 48 hours in advance to ensure availability and timely preparation.
                </BulkorderTCLi>
                <BulkorderTCLi>
                    Order Submission: Bulk orders can be placed through our official website, via email at {assets.email}, or by calling our bulk order hotline at {assets.phone}. Please provide detailed information about your order, including the number of guests, preferred menu items, and any special requests.
                </BulkorderTCLi>
            </BulkorderTCUl>
            <BulkorderTCH3>2. Order Confirmation</BulkorderTCH3>
            <BulkorderTCP>
                Once your bulk order is received, we will contact you to confirm the details and provide a final quote. A deposit may be required to secure your order.
            </BulkorderTCP>
            <BulkorderTCH3>3. Minimum Order Requirements</BulkorderTCH3>
            <BulkorderTCUl>
                <BulkorderTCLi>
                    Minimum Quantity: Bulk orders require a minimum order quantity, which will be specified during the ordering process. This ensures we can efficiently manage our kitchen operations and provide the best quality food for your event.
                </BulkorderTCLi>
            </BulkorderTCUl>
            <BulkorderTCH3>4. Customization and Special Requests</BulkorderTCH3>
            <BulkorderTCUl>
                <BulkorderTCLi>
                    Menu Customization: We offer a range of customization options for bulk orders, including specific menu items, portion sizes, and dietary accommodations. Please discuss any special requests with our team when placing your order.
                </BulkorderTCLi>
                <BulkorderTCLi>
                    Special Requests: If you have any specific requirements, such as gluten-free, vegetarian, or other dietary needs, please inform us at the time of ordering.
                </BulkorderTCLi>
            </BulkorderTCUl>
            <BulkorderTCH3>5. Pricing and Payment</BulkorderTCH3>
            <BulkorderTCUl>
                <BulkorderTCLi>
                    Pricing: Bulk order pricing will be provided based on your specific order details. Prices include food, packaging, and any applicable delivery fees.
                </BulkorderTCLi>
                <BulkorderTCLi>
                    Deposit: A non-refundable deposit of 50% of the total order cost is required upon confirmation. The remaining balance is due upon delivery or pick-up.
                </BulkorderTCLi>
                <BulkorderTCLi>
                    Payment Methods: We accept various payment methods, including credit/debit cards, digital wallets, and bank transfers. Payment instructions will be provided upon order confirmation
                </BulkorderTCLi>
            </BulkorderTCUl>
            <BulkorderTCH3>6. Delivery and Pick-Up Options</BulkorderTCH3>
            <BulkorderTCUl>
                <BulkorderTCLi>
                    Delivery: We offer delivery services for bulk orders within a specified radius. Delivery fees will be based on the location and size of the order. Our team will coordinate with you to arrange a convenient delivery time.
                </BulkorderTCLi>
                <BulkorderTCLi>
                    Pick-Up: Bulk orders can also be picked up from our restaurant at 123 Flavor Street, Culinary City, Foodland. Please specify your preference when placing your order.
                </BulkorderTCLi>
            </BulkorderTCUl>
            <BulkorderTCH3>7. Order Changes and Cancellations</BulkorderTCH3>
            <BulkorderTCUl>
                <BulkorderTCLi>
                    Changes: If you need to make changes to your bulk order, please contact us immediately. Changes cannot be guaranteed if the order is already in preparation.
                </BulkorderTCLi>
                <BulkorderTCLi>
                    Cancellations: Cancellations must be made at least 24 hours before the scheduled delivery or pick-up time. The deposit is non-refundable.
                </BulkorderTCLi>
            </BulkorderTCUl>
            <BulkorderTCH3>8. Quality and Satisfaction</BulkorderTCH3>
            <BulkorderTCP>
                We take great care in preparing and packaging your bulk order to ensure it arrives fresh and delicious. If you encounter any issues with your order, please contact us promptly. We value your feedback and will address any concerns to ensure your satisfaction.
            </BulkorderTCP>
            <BulkorderTCH3>9. Liability</BulkorderTCH3>
            <BulkorderTCP>
                Oxhead Inasals is not liable for any delays, delivery failures, or incorrect deliveries due to incorrect information provided by the customer or unforeseen circumstances beyond our control. We recommend confirming all details at the time of order confirmation to avoid any issues.
            </BulkorderTCP>
            <BulkorderTCH3>10. Promotions and Discounts</BulkorderTCH3>
            <BulkorderTCP>
                Promotional offers and discounts for bulk orders are subject to specific terms and conditions. These will be detailed in the respective promotion's description. Discounts cannot be combined with other offers unless explicitly stated.
            </BulkorderTCP>
            <BulkorderTCH3>Contact Us</BulkorderTCH3>
            <BulkorderTCP>
                For any questions or concerns regarding our bulk order service, please contact our customer service team at:
            </BulkorderTCP>
            <BulkorderTCUl>
                <BulkorderTCLi>
                    Phone: {assets.phone}
                </BulkorderTCLi>
                <BulkorderTCLi>
                    Email: {assets.email}
                </BulkorderTCLi>
            </BulkorderTCUl>
            <BulkorderTCH3>Thank you for choosing Oxhead Inasals for your bulk order needs. We look forward to making your event a delicious success!</BulkorderTCH3>
        </BulkorderTCContent>
    </BulkorderTCContainer>
    </>
  )
}

export default BulkorderTC
