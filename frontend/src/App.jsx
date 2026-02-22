import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostDetails from './pages/PostDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import RefundPolicy from './pages/RefundPolicy';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetails />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/update/:id" element={<UpdatePost />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<RefundPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
