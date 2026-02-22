import React from 'react';

const AboutUs = () => {
    return (
        <div className="legal-container" style={{ maxWidth: '900px' }}>
            <h1 className="legal-title text-center" style={{ textAlign: 'center' }}>About Us</h1>

            <div className="about-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <img
                    src="https://github.com/anilmonitor.png"
                    alt="Anil"
                    style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--primary)', boxShadow: 'var(--shadow)' }}
                />

                <div className="legal-content" style={{ textAlign: 'left', width: '100%' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        Welcome To <strong>monitorVlog</strong>
                    </p>
                    <p>
                        My name is Anil and I’m a tech content creator at YouTube on{' '}
                        <a href="https://youtube.com/@anilmonitor" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>@anilmonitor</a> and{' '}
                        <a href="https://www.youtube.com/@ANILENGINEER" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>@anilengineer</a>.
                        I love exploring new places and making vlog videos – check out my vlog channel{' '}
                        <a href="https://youtube.com/vloganil" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>@anilmonitorvlog</a>.
                    </p>
                    <p>
                        I created this platform to share tech articles, content, and vlogs. Whenever people get help through my content, I feel very happy 😊.
                        I will keep posting more important articles and videos on my site for all of you. Please give your support and love.
                    </p>

                    <p>Thank you all 😊!!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
