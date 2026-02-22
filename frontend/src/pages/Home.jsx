import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import { Search } from 'lucide-react';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/posts');
            setPosts(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message || 'Error fetching posts');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await axios.delete(`http://localhost:3000/api/posts/${id}`);
                setPosts(posts.filter(post => post._id !== id));
            } catch (err) {
                alert('Error deleting post');
            }
        }
    };

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) return <div className="loading"><div className="spinner"></div>Loading amazing vlogs...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="home-container">
            <div className="hero-section">
                <h1 className="hero-title">Discover the World</h1>
                <p className="hero-subtitle">Explore breathtaking vlogs and stories from around the globe</p>
                <div className="search-container">
                    <Search className="search-icon" size={22} />
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search posts by title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {filteredPosts.length === 0 ? (
                <div className="no-data">
                    {posts.length === 0 ? "No posts found. Create one to get started!" : "No posts matching your search."}
                </div>
            ) : (
                <div className="posts-grid">
                    {filteredPosts.map((post) => (
                        <PostCard key={post._id} post={post} onDelete={handleDelete} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
