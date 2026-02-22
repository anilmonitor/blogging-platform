import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Linkedin, MonitorPlay } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link to="/" className="nav-brand" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
                            <MonitorPlay size={28} />
                            <span>monitorVlog</span>
                        </Link>
                        <p>Bringing you the most stunning vlogs and stories from across the planet. Immerse yourself in our community.</p>
                    </div>

                    <div className="footer-links-col">
                        <h3>Legal Information</h3>
                        <div className="footer-links">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms & Conditions</Link>
                            <Link to="/refund">Refund Policy</Link>
                        </div>
                    </div>

                    <div className="footer-social-col">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="social-icon youtube">
                                <Youtube size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon instagram">
                                <Instagram size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon twitter">
                                <Twitter size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} monitorVlog. Crafted with modern aesthetics and passion.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
