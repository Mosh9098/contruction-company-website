import React from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-left">
                    <h3>Head Office</h3>
                    <p><FaMapMarkerAlt className="footer-icon" /> CAD CENTRE, OFF NGONG ROAD</p>
                    <p><FaEnvelope className="footer-icon" /> Email: <a href="mailto:info@lenatech.co.ke">info@lenatech.co.ke</a></p>
                    <p><FaPhone className="footer-icon" /> Tel: <a href="tel:+0740314877">0740314877</a>  or  <a href="tel:+0763898582">0763898582</a></p>
                </div>
                <div className="footer-right">
                    <h3>Inquiries</h3>
                    <p>For any inquiries, questions contact us:</p>
                    <p><FaPhone className="footer-icon" /> 0740314877</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Lenatech (k) Ltd</p>
                <div className="social-icons">
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://wa.me/0740314877" aria-label="WhatsApp">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
