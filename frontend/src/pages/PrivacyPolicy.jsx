import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="legal-container">
            <h1 className="legal-title">Privacy Policy</h1>
            <div className="legal-content">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <h2>1. Information We Collect</h2>
                <p>We collect information you provide directly to us when you create an account, publish a vlog, or communicate with us.</p>
                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to operate, maintain, and improve our services.</p>
                <h2>3. Information Sharing</h2>
                <p>We do not share your personal information with third parties without your consent, except as required by law.</p>
                <h2>4. Data Security</h2>
                <p>We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, and disclosure.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
