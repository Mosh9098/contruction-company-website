import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/services');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched services:', data);  // Log the fetched data
                setServices(data);
            } catch (error) {
                console.error('Failed to fetch services:', error);
            }
        };

        fetchServices();
    }, []);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const title = queryParams.get('title');

        if (title) {
            const element = document.getElementById(title);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.search]);

    return (
        <div className="services">
            {services.length > 0 ? (
                services.map((service, index) => (
                    <div className="service-card" key={index} id={service.title}>
                        <div className="service-left">
                            {service.icon && (
                                <img
                                    src={`http://localhost:5000/img/${service.icon}`}
                                    alt={service.title}
                                    className="service-icon"
                                />
                            )}
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                        {service.image && (
                            <div className="service-image-container">
                                <img
                                    src={`http://localhost:5000/img/${service.image}`}
                                    alt={service.title}
                                    className="service-image"
                                />
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>No services available.</p>
            )}
        </div>
    );
};

export default Services;
