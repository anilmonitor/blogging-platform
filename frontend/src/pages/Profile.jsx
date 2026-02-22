import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { User, Mail, Calendar } from 'lucide-react';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [userPosts, setUserPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
            return;
        }

        const fetchProfileData = async () => {
            try {
                // Fetch Profile
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    }
                };
                const { data: profileData } = await axios.get('http://localhost:3000/api/auth/profile', config);
                setProfile(profileData);

                // Fetch Posts and filter (since we don't have a specific getPostsByUser route yet)
                const { data: allPosts } = await axios.get('http://localhost:3000/api/posts');
                const filteredPosts = allPosts.filter(post => post.author === profileData.username);
                setUserPosts(filteredPosts);

            } catch (err) {
                setError('Failed to load profile data');
            } finally {
                setLoading(false);
            }
        };

        fetchProfileData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
                await axios.delete(`http://localhost:3000/api/posts/${id}`, config);
                setUserPosts(userPosts.filter(post => post._id !== id));
            } catch (error) {
                alert('Error deleting post');
            }
        }
    };

    if (loading) return <div className="loading">Loading Profile...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!profile) return null;

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem 1rem' }}>
            <div className="profile-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem', padding: '2rem', background: 'var(--surface)', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
                <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', marginBottom: '1.5rem', border: '4px solid var(--primary)' }}>
                    <img
                        src={profile.profilePicture || 'https://images.unsplash.com/photo-1542435503-956c269c0d5e?auto=format&fit=crop&q=80&w=800'}
                        alt={profile.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542435503-956c269c0d5e?auto=format&fit=crop&q=80&w=800'; }}
                    />
                </div>

                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-main)' }}>{profile.name}</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '1.5rem' }}>@{profile.username}</p>

                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={18} /> {profile.email}</span>
                </div>
            </div>

            <div className="profile-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 700 }}>My Posts ({userPosts.length})</h2>
                    <Link to="/create" className="btn btn-primary">Create New Post</Link>
                </div>

                {userPosts.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--surface)', borderRadius: '12px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>You haven't posted anything yet!</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Share your first vlog or experience with the community.</p>
                        <Link to="/create" className="btn btn-primary">Create Your First Post</Link>
                    </div>
                ) : (
                    <div className="posts-grid">
                        {userPosts.map(post => (
                            <PostCard key={post._id} post={post} onDelete={handleDelete} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
