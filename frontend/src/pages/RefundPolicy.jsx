import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="legal-container">
            <h1 className="legal-title">Refund Policy</h1>
            <div className="legal-content">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h2>1. Digital Goods</h2>
                <p>Given the nature of digital vlogs and content access, we do not generally offer a refund or credit on a purchase unless required under regional consumer law or other relevant consumer protection laws.</p>
                <h2>2. Subscriptions</h2>
                <p>If subscriptions are ever implemented, they may be cancelled at any time; however, refunds will not be issued for the remaining duration of a billing cycle.</p>
                <h2>3. Contact Us</h2>
                <p>If you have any questions about our Returns and Refunds Policy, please contact us by visiting our support page.</p>
            </div>
        </div>
    );
};

export default RefundPolicy;
