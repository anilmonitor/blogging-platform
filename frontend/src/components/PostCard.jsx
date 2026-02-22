import React from 'react';
import { Link } from 'react-router-dom';
import { PencilLine, Trash2, Calendar, Eye } from 'lucide-react';

const PostCard = ({ post, onDelete }) => {
    return (
        <div className="post-card">
            <Link to={`/post/${post._id}`} style={{ display: 'block' }}>
                <img src={post.photo} alt={post.title} className="post-image" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542435503-956c269c0d5e?auto=format&fit=crop&q=80&w=800'; }} />
            </Link>
            <div className="post-content">
                <Link to={`/post/${post._id}`}>
                    <h3 className="post-title">{post.title}</h3>
                </Link>

                <div className="post-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <Calendar size={14} />
                        {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-main)' }}>
                        @{post.author || 'admin'}
                    </span>
                    <span>ID: {post._id.substring(0, 8)}...</span>
                </div>

                <p className="post-desc">{post.description.length > 100 ? `${post.description.substring(0, 100)}...` : post.description}</p>

                <div className="post-actions">
                    <Link to={`/post/${post._id}`} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
                        <Eye size={16} /> View
                    </Link>
                    <Link to={`/update/${post._id}`} className="btn btn-primary" style={{ padding: '0.5rem', display: 'flex', justifyContent: 'center' }} title="Edit">
                        <PencilLine size={16} />
                    </Link>
                    <button onClick={() => onDelete(post._id)} className="btn btn-danger" style={{ padding: '0.5rem', display: 'flex', justifyContent: 'center' }} title="Delete">
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
