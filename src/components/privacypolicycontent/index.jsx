import React from 'react'
import { assets } from '../../assets/assets'
import {
    PrivacyPolicyContainer,
    PrivacyPolicyContent,
    PrivacyPolicyH3,
    PrivacyPolicyP,
    PrivacyPolicyUl,
    PrivacyPolicyLi
} from './elements'

const PrivacyPolicy = () => {
  return (
    <>
    <PrivacyPolicyContainer>
        <PrivacyPolicyContent>
            <PrivacyPolicyH3>Oxhead Inasals Privacy Policy</PrivacyPolicyH3>
            <PrivacyPolicyP>
                Welcome to Oxhead Inasals! We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </PrivacyPolicyP>
            <PrivacyPolicyH3>1. Information Collection</PrivacyPolicyH3>
            <PrivacyPolicyP>
                Personal Information
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    We collect personal information that you provide directly to us when you place an order, create an account, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, delivery address, and payment details.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyP>
                Usage Data
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    We automatically collect certain information when you visit our website. This may include your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyH3>2. Use of Information</PrivacyPolicyH3>
            <PrivacyPolicyP>
                Order Processing
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    Your personal information is used to process and fulfill your orders, including payment processing, order confirmation, and delivery.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyP>
                Customer Service
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    We use your information to respond to your inquiries, provide customer support, and improve our services.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyP>
                Marketing and Promotions
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    With your consent, we may use your information to send you promotional materials, special offers, and updates about our products and services. You can opt-out of these communications at any time.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyP>
                Improvement and Analysis
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    We analyze usage data to improve our website, products, and services, and to understand our customers' preferences and behavior.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyH3>3. Data Protection</PrivacyPolicyH3>
            <PrivacyPolicyP>
                Security Measures
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    We implement various security measures to protect your personal information, including encryption, secure servers, and access controls.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyP>
                Third-Party Services
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    We do not sell, trade, or otherwise transfer your personal information to outside parties except trusted third parties who assist us in operating our website, conducting our business, or servicing you, provided those parties agree to keep this information confidential.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyH3>4. Cookies</PrivacyPolicyH3>
            <PrivacyPolicyP>
                Usage
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    Our website uses cookies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enable the site's systems to recognize your browser and capture and remember certain information
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyP>
                Management
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of our website.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyH3>5. Your Rights</PrivacyPolicyH3>
            <PrivacyPolicyP>
                Access and Correction
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    You have the right to access, correct, or delete your personal information. Please contact us at {assets.email} for any requests regarding your data.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyP>
                Opt-Out
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    You can opt-out of receiving promotional emails by following the unsubscribe instructions included in each email.
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyH3>6. Changes to Privacy Policy</PrivacyPolicyH3>
            <PrivacyPolicyP>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website. Your continued use of our website and services after any changes constitutes your acceptance of the new Privacy Policy.
            </PrivacyPolicyP>
            <PrivacyPolicyH3>7. Contact Us</PrivacyPolicyH3>
            <PrivacyPolicyP>
                For any questions or concerns regarding our Privacy Policy, please contact us at:
            </PrivacyPolicyP>
            <PrivacyPolicyUl>
                <PrivacyPolicyLi>
                    Email: {assets.email}
                </PrivacyPolicyLi>
                <PrivacyPolicyLi>
                    Phone: {assets.phone}
                </PrivacyPolicyLi>
            </PrivacyPolicyUl>
            <PrivacyPolicyH3>Thank you for choosing Oxhead Inasals. We are committed to ensuring your privacy and providing a secure and enjoyable experience.</PrivacyPolicyH3>
        </PrivacyPolicyContent>
    </PrivacyPolicyContainer>
    </>
  )
}

export default PrivacyPolicy
