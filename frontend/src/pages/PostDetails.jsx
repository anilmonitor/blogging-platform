import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Calendar, ArrowLeft, PencilLine, Trash2 } from 'lucide-react';

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
                setPost(response.data);
            } catch (err) {
                setError('Error fetching post details');
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await axios.delete(`http://localhost:3000/api/posts/${id}`);
                navigate('/');
            } catch (err) {
                alert('Error deleting post');
            }
        }
    };

    if (loading) return <div className="loading">Loading post...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!post) return <div className="error">Post not found</div>;

    return (
        <div className="post-details-container">
            <Link to="/" className="btn btn-outline" style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <div className="post-details-card">
                <img src={post.photo} alt={post.title} className="post-details-image" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542435503-956c269c0d5e?auto=format&fit=crop&q=80&w=800'; }} />

                <div className="post-details-content">
                    <h1 className="post-details-title">{post.title}</h1>

                    <div className="post-details-meta">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Calendar size={16} />
                            {new Date(post.createdAt).toLocaleDateString()}
                        </span>
                        <span>ID: {post._id}</span>
                    </div>

                    <div className="post-details-desc">
                        {post.description.split('\n').map((paragraph, index) => (
                            <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
                        ))}
                    </div>

                    <div className="post-actions" style={{ marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                        <Link to={`/update/${post._id}`} className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                            <PencilLine size={16} /> Edit Post
                        </Link>
                        <button onClick={handleDelete} className="btn btn-danger" style={{ flex: 1, justifyContent: 'center' }}>
                            <Trash2 size={16} /> Delete Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
