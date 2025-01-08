import React, { useState } from 'react';

const QuoteRequestForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Quote request submitted!');
    };

    return (
        <div className="quote-request-form">
            <h2>Request a Quote</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Project Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                />
                <button type="submit">Request Quote</button>
            </form>
        </div>
    );
};

export default QuoteRequestForm;
