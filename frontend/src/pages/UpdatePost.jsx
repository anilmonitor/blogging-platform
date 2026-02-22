import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdatePost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState('');
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/posts/${id}`);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setPhoto(response.data.photo);
            } catch (error) {
                alert('Error fetching post data');
                navigate('/');
            } finally {
                setFetching(false);
            }
        };
        fetchPost();
    }, [id, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.put(`http://localhost:3000/api/posts/${id}`, {
                title,
                description,
                photo
            });
            navigate('/');
        } catch (error) {
            alert('Error updating post');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="loading">Loading post...</div>;

    return (
        <div className="form-container">
            <h2 className="form-title">Update Vlog Post</h2>
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
                    />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }} disabled={loading}>
                    {loading ? 'Updating...' : 'Update Post'}
                </button>
            </form>
        </div>
    );
};

export default UpdatePost;
