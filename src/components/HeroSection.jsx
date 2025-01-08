import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/images');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                const filteredImages = data.filter(image =>
                    ['about.jpg', 'about2.jpg', 'img3.jpg'].includes(image.path)
                );
                setImages(filteredImages);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="hero">
            {loading ? (
                <p>Loading images...</p>
            ) : error ? (
                <p className="error-message">Error: {error}</p>
            ) : (
                <Slider {...settings}>
                    {images.map((image) => (
                        <div key={image.id} className="hero-slide">
                            <img
                                src={`http://127.0.0.1:5000/img/${image.path}`}
                                alt={`Slide ${image.id}`}
                                className="hero-image"
                                style={{
                                    width: '100%',
                                    height: '100vh',
                                    objectFit: 'cover',
                                    position: 'relative',
                                }}
                            />
                            <div className="hero-text">
                                <h1>LENATECH (K) LTD</h1>
                                <p>STRUCTURAL & CIVIL CONTRACTORS</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </section>
    );
};

export default HeroSection;
