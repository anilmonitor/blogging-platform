import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = { headers: { 'Content-Type': 'application/json' } };
            const payload = { name, username, email, password };
            if (profilePicture) payload.profilePicture = profilePicture;

            const { data } = await axios.post('http://localhost:3000/api/auth/register', payload, config);
            localStorage.setItem('userInfo', JSON.stringify(data));
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Error creating account');
        }
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="form-container" style={{ width: '100%', maxWidth: '400px' }}>
                <h1 className="form-title">Create Account</h1>
                <p style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                    Join monitorVlog community today
                </p>

                <form onSubmit={handleSubmit}>
                    {error && <div className="error" style={{ color: 'var(--danger)', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Profile Picture URL (Optional)</label>
                        <input
                            type="url"
                            className="form-input"
                            placeholder="https://example.com/photo.jpg"
                            value={profilePicture}
                            onChange={(e) => setProfilePicture(e.target.value)}
                        />
                        {profilePicture && (
                            <div style={{ marginTop: '0.5rem', borderRadius: '50%', overflow: 'hidden', width: '60px', height: '60px', margin: '0.5rem auto 0' }}>
                                <img src={profilePicture} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} onLoad={(e) => { e.target.style.display = 'block'; }} />
                            </div>
                        )}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="Create a password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength="6"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                        Sign Up
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-muted)' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '600' }}>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
