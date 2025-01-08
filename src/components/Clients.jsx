import React from 'react';

const Clients = () => {
    const clients = [
        { id: 1, name: 'Tesla', imgSrc: 'src/img/clients/tesla.jpg' },
        { id: 2, name: 'Safaricom', imgSrc: 'src/img/clients/safaricom.png' },
        { id: 3, name: 'Linksoft', imgSrc: 'src/img/clients/linksoft.jpeg' },
        { id: 4, name: 'Avcon', imgSrc: 'src/img/clients/avcon.png' },
        { id: 5, name: 'Ascom', imgSrc: 'src/img/clients/ascom.png' },
        { id: 6, name: 'Alandick', imgSrc: 'src/img/clients/alandick.png' },
    ];

    return (
        <section className="clients-section">
            <h2>Some of the clients weve served and still do:</h2>
            <div className="clients-grid">
                {clients.map((client) => (
                    <div key={client.id} className="client-card">
                        <img src={client.imgSrc} alt={client.name} className="client-logo" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
