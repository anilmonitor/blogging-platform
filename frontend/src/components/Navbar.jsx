import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, MonitorPlay, Sun, Moon, Youtube, Github } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/login');
    };

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
                <div style={{ display: 'flex', gap: '0.8rem', marginLeft: '0.5rem', alignItems: 'center' }}>
                    {userInfo ? (
                        <>
                            <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.9rem' }}>@{userInfo.username}</span>
                            <button onClick={handleLogout} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>Logout</button>
                        </>
                    ) : (
                        <Link to="/login" className="nav-link">Login</Link>
                    )}
                    <Link to="/create" className="nav-link nav-btn">Create Post</Link>
                </div>
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
                {userInfo ? (
                    <button onClick={() => { handleLogout(); setIsOpen(false); }} className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', paddingLeft: '1rem', width: '100%' }}>Logout (@{userInfo.username})</button>
                ) : (
                    <Link to="/login" className="nav-link" onClick={() => setIsOpen(false)}>Login/Sign Up</Link>
                )}
                <Link to="/create" className="nav-link nav-btn" style={{ textAlign: 'center' }} onClick={() => setIsOpen(false)}>Create Post</Link>
            </div>
        </nav>
    );
};

export default Navbar;
