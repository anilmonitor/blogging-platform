import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MonitorPlay, Sun, Moon, Youtube, Github } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                <MonitorPlay size={28} />
                <span>monitorVlog</span>
            </Link>

            {/* Desktop Menu */}
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About Us</Link>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginLeft: '0.5rem', borderLeft: '1px solid var(--border)', paddingLeft: '1.25rem' }}>
                    <a href="https://github.com/anilmonitor" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)' }} title="GitHub" className="nav-icon-link"><Github size={20} /></a>
                    <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
                <Link to="/create" className="nav-link nav-btn" style={{ marginLeft: '0.5rem' }}>Create Post</Link>
            </div>

            {/* Mobile Actions */}
            <div className="mobile-actions">
                <a href="https://github.com/anilmonitor" target="_blank" rel="noreferrer" style={{ color: 'var(--text-main)' }}><Github size={20} /></a>
                <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                {/* Hamburger Icon */}
                <button className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</Link>
                <Link to="/create" className="nav-link nav-btn" style={{ textAlign: 'center' }} onClick={() => setIsOpen(false)}>Create Post</Link>
            </div>
        </nav>
    );
};

export default Navbar;
