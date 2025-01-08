import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const slideshowInterval = 3000;

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/images');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setImages(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching images:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    useEffect(() => {
        let timer;
        if (isPlaying && images.length > 0) {
            timer = setInterval(() => {
                setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, slideshowInterval);
        }
        return () => clearInterval(timer);
    }, [isPlaying, images]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setSlideIndex(images.indexOf(image));
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsPlaying(false);
    };

    const handleNextImage = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    return (
        <div>
            <h1>Gallery</h1>
            {loading ? (
                <p>Loading images...</p>
            ) : error ? (
                <p className="error-message">Error: {error}</p>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' ,justifyContent:'center'}}>
                    {images.length > 0 ? (
                        images.map((image) => (
                            <div
                                key={image.id}
                                className="image-container"
                                onClick={() => handleImageClick(image)}
                            >
                                <img
                                    src={`http://localhost:5000/img/${image.path}`}
                                    alt={`Gallery image ${image.id}`}
                                    style={{
                                        width: '350px',
                                        height: '300px',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}
                                />
                            </div>
                        ))
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
            )}

            {selectedImage && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={handleCloseModal}>&times;</span>
                        <button className="nav-button prev" onClick={handlePrevImage}>&lt;</button>
                        <img
                            src={`http://localhost:5000/img/${images[slideIndex].path}`}
                            alt={`Selected image ${images[slideIndex].id}`}
                            style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }}
                        />
                        <button className="nav-button next" onClick={handleNextImage}>&gt;</button>
                        <button className="play-pause-button" onClick={handlePlayPause}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
