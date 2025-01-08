import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-content">
                <ContactForm />
                <Map />
            </div>
        </div>
    );
};

export default ContactUs;
