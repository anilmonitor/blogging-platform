import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Only logged in users can create posts
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    React.useEffect(() => {
        if (!userInfo) {
            alert("You must be logged in to create a post.");
            navigate('/login');
        }
    }, [navigate, userInfo]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInfo) return;

        setLoading(true);

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            await axios.post('http://localhost:3000/api/posts', {
                title,
                description,
                photo
            }, config);
            navigate('/');
        } catch (error) {
            alert('Error creating post. Check server or data.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Create New Vlog Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        className="form-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Amazing vlog title"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="photo">Photo URL (from internet)</label>
                    <input
                        id="photo"
                        type="url"
                        className="form-input"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        required
                        placeholder="https://example.com/image.jpg"
                    />
                    {photo && (
                        <div style={{ marginTop: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                            <img src={photo} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} onLoad={(e) => { e.target.style.display = 'block'; }} />
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        className="form-textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder="Tell us about this vlog..."
                    />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }} disabled={loading}>
                    {loading ? 'Creating...' : 'Create Post'}
                </button>
            </form>
        </div>
    );
};

export default CreatePost;
