import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Import right arrow icon

const ServiceCard = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/services');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error('Failed to fetch services:', error);
            }
        };

        fetchServices();
    }, []);

    const handleViewServicesClick = () => {
        navigate('/services');
    };

    return (
        <div className="service">
            <div className="service-cards">
                {services.map((service) => (
                    <div className="s-card" key={service.id}>
                        {service.icon && (
                            <div className="s-i-c">
                                <img
                                    src={`http://localhost:5000/img/${service.icon}`}
                                    alt={service.title}
                                    className="s-icon"
                                />
                            </div>
                        )}
                        <h3 className="s-title">{service.title}</h3>
                    </div>
                ))}
            </div>
            <div className="view-services-container">
                <button
                    className="view-services-button"
                    onClick={handleViewServicesClick}
                >
                    View Our Services
                    <FaArrowRight className="arrow-icon" />
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
