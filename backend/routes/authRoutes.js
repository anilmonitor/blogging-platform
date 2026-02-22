import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile
router.route('/profile').get(protect, getUserProfile);

export default router;
