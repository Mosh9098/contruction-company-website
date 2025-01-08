import React from 'react';

const Map = () => {
    return (
        <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.25822426002!2d36.718089544870686!3d-1.3158788599213254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11a00830ca25%3A0x238a136f55e707d2!2sLenatech%20Limited!5e0!3m2!1sen!2ske!4v1724846177753!5m2!1sen!2ske" 
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lenatech (k) ltd"
            ></iframe>
        </div>
    );
};

export default Map;
