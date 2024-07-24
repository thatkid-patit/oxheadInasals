import React from 'react'
import { assets } from '../../assets/assets'
import {
    AboutContentContainer,
    AboutContentContent,
    AboutContentH3,
    AboutContentP,
    AboutContentUl,
    AboutContentLi
} from './elements'

const AboutContent = () => {
  return (
    <AboutContentContainer>
        <AboutContentContent>
            <AboutContentH3>About Us: Oxhead Inasals</AboutContentH3>
            <AboutContentP>
                Welcome to Oxhead Inasals, where we celebrate the rich culinary heritage of the Philippines through our delectable inasal dishes. Our journey began with a passion for bringing the authentic flavors of Filipino barbecue to food lovers everywhere. At Oxhead Inasals, we believe in the power of good food to bring people together, and we strive to create a dining experience that feels like a warm, inviting family gathering.
            </AboutContentP>
            <AboutContentH3>Our Story</AboutContentH3>
            <AboutContentP>
                Oxhead Inasals was founded by a group of friends who shared a love for Filipino cuisine and a dream to showcase its unique flavors to the world. With roots deeply embedded in the Philippines, our founders spent years perfecting recipes passed down through generations. Their vision was to create a place where tradition meets innovation, where each dish tells a story, and where every bite transports you to the vibrant streets of the Philippines.
            </AboutContentP>
            <AboutContentH3>Our Philosophy</AboutContentH3>
            <AboutContentP>
                At Oxhead Inasals, we are committed to using the freshest ingredients, sourced locally whenever possible, to ensure the highest quality in every dish we serve. Our secret lies in our traditional marinade and grilling techniques, which infuse our meats with a smoky, savory goodness that is hard to resist. We take pride in staying true to our cultural roots while continuously exploring new ways to elevate our menu.
            </AboutContentP>
            <AboutContentH3>Our Menu</AboutContentH3>
            <AboutContentP>
                Our menu features a variety of inasal dishes, each meticulously crafted to highlight the bold and savory flavors that make Filipino barbecue so special. From our signature chicken inasal to our succulent pork belly and tender beef skewers, every dish is a testament to our dedication to authenticity and excellence. We also offer a range of sides and desserts that complement our mains perfectly, creating a well-rounded and satisfying meal.
            </AboutContentP>
            <AboutContentH3>Community and Sustainability</AboutContentH3>
            <AboutContentP>
                We believe in giving back to the community that has supported us from the beginning. Oxhead Inasals is proud to partner with local farmers and suppliers, promoting sustainable practices and contributing to the local economy. Our commitment to sustainability extends to our operations as well, as we continuously seek ways to reduce our environmental footprint through mindful sourcing and waste management.
            </AboutContentP>
            <AboutContentH3>Join Us</AboutContentH3>
            <AboutContentP>
                Whether you&apos;re dining with us for the first time or you&apos;re a loyal customer, we invite you to experience the warmth and flavor of Oxhead Inasals. Join us for a meal that celebrates the spirit of togetherness and the joy of great food. We look forward to serving you and sharing our love for Filipino cuisine.
            </AboutContentP>
            <AboutContentP>
                Thank you for being part of our journey. Welcome to the Oxhead Inasals family!
            </AboutContentP>
            <AboutContentH3>Contact Us</AboutContentH3>
            <AboutContentP>
                For inquiries, reservations, or catering services, please reach out to us at:
            </AboutContentP>
            <AboutContentUl>
                    <AboutContentLi>Address: {assets.address}</AboutContentLi>
                    <AboutContentLi>Phone: {assets.phone}</AboutContentLi>
                    <AboutContentLi>Email: {assets.email}</AboutContentLi>
            </AboutContentUl>
            <AboutContentP>
            Follow us on social media to stay updated on our latest offerings and special events:
            </AboutContentP>
            <AboutContentUl>
                    <AboutContentLi>Facebook: {assets.facebook}</AboutContentLi>
                    <AboutContentLi>Instagram: {assets.instagram}</AboutContentLi>
                    <AboutContentLi>Tiktok: {assets.tiktok}</AboutContentLi>
            </AboutContentUl>
            <AboutContentH3>We look forward to welcoming you soon!</AboutContentH3>
        </AboutContentContent>
    </AboutContentContainer>
  )
}

export default AboutContent

