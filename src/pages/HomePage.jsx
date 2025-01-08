import React from 'react';
import ServiceCard from '../components/ServiceCard';
// import ProjectThumbnail from '../components/ProjectThumbnail';
// import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Clients from '../components/Clients';

const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                {/* Hero content */}
                <HeroSection />
            </section>
            {/* Service Cards */}
            <section className="services">
                <ServiceCard />
                {/* More ServiceCard components */}
            </section>
            {/* Project Thumbnails */}
            <section className="projects">
                {/* <ProjectThumbnail /> */}
                {/* More ProjectThumbnail components */}
            </section>
            {/* Remove TestimonialsCarousel section */}
            <Clients />
        </div>
    );
};

export default HomePage;
