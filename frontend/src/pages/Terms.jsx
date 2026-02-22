import React from 'react';

const Terms = () => {
    return (
        <div className="legal-container">
            <h1 className="legal-title">Terms & Conditions</h1>
            <div className="legal-content">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using monitorVlog, you accept and agree to be bound by the terms and provision of this agreement.</p>
                <h2>2. Content Creation</h2>
                <p>Users are responsible for ensuring they have the rights to the photos and descriptions they post to the platform.</p>
                <h2>3. Prohibited Conduct</h2>
                <p>You may not use monitorVlog for any illegal or unauthorized purpose.</p>
                <h2>4. Termination</h2>
                <p>We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever.</p>
            </div>
        </div>
    );
};

export default Terms;
