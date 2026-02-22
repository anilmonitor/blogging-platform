import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Users, FileText, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('users');
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) {
            navigate('/');
            return;
        }

        const fetchData = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    }
                };

                const [{ data: usersData }, { data: postsData }] = await Promise.all([
                    axios.get('http://localhost:3000/api/auth/users', config),
                    axios.get('http://localhost:3000/api/posts')
                ]);

                setUsers(usersData);
                setPosts(postsData);
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate, userInfo]);

    const handleDeleteUser = async (id) => {
        if (window.confirm('Are you sure you want to delete this user? Their account will be permanently obliterated!')) {
            try {
                const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
                await axios.delete(`http://localhost:3000/api/auth/users/${id}`, config);
                setUsers(users.filter(user => user._id !== id));
            } catch (err) {
                alert('Error deleting user');
            }
        }
    };

    const handleDeletePost = async (id) => {
        if (window.confirm('Are you sure you want to delete this post as Admin?')) {
            try {
                const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
                await axios.delete(`http://localhost:3000/api/posts/${id}`, config);
                setPosts(posts.filter(post => post._id !== id));
            } catch (err) {
                alert('Error deleting post');
            }
        }
    };

    if (loading) return <div className="loading">Loading Super Secret Admin Area...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '2.5rem' }}>Admin Control Center</h1>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <button
                    onClick={() => setActiveTab('users')}
                    className={`btn ${activeTab === 'users' ? 'btn-primary' : 'btn-outline'}`}
                >
                    <Users size={18} /> Manage Users ({users.length})
                </button>
                <button
                    onClick={() => setActiveTab('posts')}
                    className={`btn ${activeTab === 'posts' ? 'btn-primary' : 'btn-outline'}`}
                >
                    <FileText size={18} /> Manage Posts ({posts.length})
                </button>
            </div>

            <div className="admin-content" style={{ background: 'var(--surface)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow)' }}>
                {activeTab === 'users' && (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                                    <th style={{ padding: '1rem' }}>ID</th>
                                    <th style={{ padding: '1rem' }}>NAME</th>
                                    <th style={{ padding: '1rem' }}>USERNAME</th>
                                    <th style={{ padding: '1rem' }}>EMAIL</th>
                                    <th style={{ padding: '1rem' }}>ADMIN</th>
                                    <th style={{ padding: '1rem' }}>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user._id} style={{ borderBottom: '1px solid var(--border)' }}>
                                        <td style={{ padding: '1rem' }}>{user._id.substring(0, 8)}...</td>
                                        <td style={{ padding: '1rem' }}>{user.name}</td>
                                        <td style={{ padding: '1rem', color: 'var(--primary)' }}>@{user.username}</td>
                                        <td style={{ padding: '1rem' }}>{user.email}</td>
                                        <td style={{ padding: '1rem' }}>{user.isAdmin ? '✅' : '❌'}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <button onClick={() => handleDeleteUser(user._id)} className="btn btn-danger" style={{ padding: '0.4rem 0.8rem' }} disabled={user.username === 'admin'}>
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'posts' && (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid var(--border)' }}>
                                    <th style={{ padding: '1rem' }}>ID</th>
                                    <th style={{ padding: '1rem' }}>AUTHOR</th>
                                    <th style={{ padding: '1rem' }}>TITLE</th>
                                    <th style={{ padding: '1rem' }}>DATE</th>
                                    <th style={{ padding: '1rem' }}>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(post => (
                                    <tr key={post._id} style={{ borderBottom: '1px solid var(--border)' }}>
                                        <td style={{ padding: '1rem' }}>{post._id.substring(0, 8)}...</td>
                                        <td style={{ padding: '1rem', color: 'var(--primary)' }}>@{post.author}</td>
                                        <td style={{ padding: '1rem', maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{post.title}</td>
                                        <td style={{ padding: '1rem' }}>{new Date(post.createdAt).toLocaleDateString()}</td>
                                        <td style={{ padding: '1rem' }}>
                                            <button onClick={() => handleDeletePost(post._id)} className="btn btn-danger" style={{ padding: '0.4rem 0.8rem' }}>
                                                <Trash2 size={16} /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
