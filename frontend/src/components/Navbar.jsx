import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MonitorPlay } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">
                <MonitorPlay size={28} />
                <span>monitorVlog</span>
            </Link>

            {/* Desktop Menu */}
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/create" className="nav-link nav-btn">Create Post</Link>
            </div>

            {/* Hamburger Icon */}
            <button className="nav-hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/create" className="nav-link nav-btn" style={{ textAlign: 'center' }} onClick={() => setIsOpen(false)}>Create Post</Link>
            </div>
        </nav>
    );
};

export default Navbar;
