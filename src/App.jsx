import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import RequestQuote from './pages/RequestQuote';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/request-quote" element={<RequestQuote />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
