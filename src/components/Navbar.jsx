import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaCogs, FaBriefcase, FaImages, FaPhone, FaQuoteLeft } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="src/img/logo1.jpg" alt="Company Logo" />
                </Link>
            </div>
            <ul className="nav-links">
                <li><Link to="/"><FaHome /> Home</Link></li>
                <li><Link to="/about-us"><FaInfoCircle /> About Us</Link></li>
                <li><Link to="/services"><FaCogs /> Services</Link></li>
                <li><Link to="/projects"><FaBriefcase /> Projects</Link></li>
                <li><Link to="/gallery"><FaImages /> Gallery</Link></li>
                <li><Link to="/contact-us"><FaPhone /> Contact Us</Link></li>
                <li><Link to="/request-quote"><FaQuoteLeft /> Request a Quote</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
