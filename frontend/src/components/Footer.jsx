import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram, Twitter, Linkedin, MonitorPlay, Github, Facebook } from 'lucide-react';

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
                            <Link to="/about">About Us</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms & Conditions</Link>
                            <Link to="/refund">Refund Policy</Link>
                        </div>
                    </div>

                    <div className="footer-social-col">
                        <h3>Follow Us</h3>
                        <div className="social-icons" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            <a href="https://youtube.com/vloganil" target="_blank" rel="noreferrer" aria-label="YouTube Vlog" className="social-icon youtube" title="Vlog Channel">
                                <Youtube size={20} />
                            </a>
                            <a href="https://www.instagram.com/anilmonitor" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://twitter.com/anilmonitor" target="_blank" rel="noreferrer" aria-label="Twitter" className="social-icon twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/anilmonitor" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon linkedin">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/anilmonitor" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon github">
                                <Github size={20} />
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
