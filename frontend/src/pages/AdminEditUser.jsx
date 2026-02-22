import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';

const AdminEditUser = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [updateResult, setUpdateResult] = useState(null);

    const navigate = useNavigate();
    const { id: userId } = useParams();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) {
            navigate('/');
            return;
        }

        const fetchUser = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    }
                };

                const { data } = await axios.get(`http://localhost:3000/api/auth/users/${userId}`, config);

                setName(data.name);
                setUsername(data.username);
                setEmail(data.email);
                setProfilePicture(data.profilePicture || '');
                setIsAdmin(data.isAdmin);
            } catch (err) {
                setError(err.response?.data?.message || 'Error fetching user');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [navigate, userInfo, userId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUpdateResult(null);
        setError(null);

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                }
            };

            await axios.put(`http://localhost:3000/api/auth/users/${userId}`, {
                name,
                username,
                email,
                profilePicture,
                isAdmin
            }, config);

            setUpdateResult('User Updated Successfully!');
            setTimeout(() => {
                navigate('/admin');
            }, 1000);
        } catch (err) {
            setError(err.response?.data?.message || 'Error updating user');
        }
    };

    if (loading) return <div className="loading">Loading...</div>;

    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
            <Link to="/admin" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem' }}>
                <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} /> Go Back
            </Link>

            <h1 className="form-title" style={{ textAlign: 'center' }}>Edit User</h1>

            <div className="form-container" style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
                <form onSubmit={handleSubmit}>
                    {error && <div className="error" style={{ color: 'var(--danger)', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                    {updateResult && <div style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>{updateResult}</div>}

                    <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Profile Picture URL</label>
                        <input
                            type="text"
                            className="form-input"
                            value={profilePicture}
                            onChange={(e) => setProfilePicture(e.target.value)}
                        />
                        {profilePicture && (
                            <div style={{ marginTop: '0.5rem', borderRadius: '50%', overflow: 'hidden', width: '60px', height: '60px', margin: '0.5rem auto 0' }}>
                                <img src={profilePicture} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} onLoad={(e) => { e.target.style.display = 'block'; }} />
                            </div>
                        )}
                    </div>

                    <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                        <input
                            type="checkbox"
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}
                            style={{ width: '20px', height: '20px' }}
                            id="adminCheck"
                        />
                        <label htmlFor="adminCheck" className="form-label" style={{ marginBottom: 0, cursor: 'pointer' }}>Is Administrator</label>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '2rem' }}>
                        Update User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminEditUser;
