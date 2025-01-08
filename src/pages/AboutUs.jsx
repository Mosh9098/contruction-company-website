import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1 className="title">About Us</h1>
            <section className="section">
                <h2 className="section-title">Company Overview</h2>
                <p className="section-content">
                    Lenatech (K) Limited has distinguished itself in the provision of Network Deployment. 
                    We have undertaken network deployment work with Safaricom, performing exemplary work in constructing over 
                    100 BTS sites across Western, Coast, Nairobi, and Rift Valley regions. With our capable teams and resources, 
                    we have successfully put up over 10 sites on air snag-free within 30 days, ensuring all required measures including safety.
                </p>
                <p className="section-content">
                    Our perspective for the telecommunications industry includes the anticipated rollout of 5G connectivity technologies, 
                    increased broadband connectivity in rural and urban areas, and cross-sector partnerships. We are well-positioned to adapt 
                    to technological changes through constant research, capacity development, and resource training.
                </p>
            </section>
            <section className="section">
                <h2 className="section-title">Our Vision</h2>
                <p className="section-content">
                    To be the market leader in providing safe, professional, and timely delivery of services to our clients.
                </p>
            </section>
            <section className="section">
                <h2 className="section-title">Our Mission</h2>
                <p className="section-content">
                    To assume a leading role in the construction industry within Kenya, driven by our passion to offer our clients the best services.
                </p>
            </section>
            <section className="section">
                <h2 className="section-title">Our Values</h2>
                <ul className="values-list">
                    <li><strong>Integrity:</strong> We are committed to upholding integrity in all our operations and business dealings.</li>
                    <li><strong>Quality:</strong> Our services are guided by principles of quality and innovation to meet the unique needs of our clients.</li>
                    <li><strong>Health and Safety:</strong> We ensure a safe working environment for our employees and those we engage with.</li>
                    <li><strong>Sustainability:</strong> We are committed to the United Nations global agenda for sustainable development goals, including clean water and sanitation.</li>
                </ul>
            </section>
        </div>
    );
};

export default AboutUs;
