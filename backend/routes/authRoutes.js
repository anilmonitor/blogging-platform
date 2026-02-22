import express from 'express';
import { registerUser, loginUser, getUserProfile, getUsers, deleteUser, getUserById, updateUser } from '../controllers/authController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile
router.route('/profile').get(protect, getUserProfile);

// Get all users
router.route('/users').get(protect, admin, getUsers);

// Delete user
router.route('/users/:id')
    .get(protect, admin, getUserById)
    .put(protect, admin, updateUser)
    .delete(protect, admin, deleteUser);

export default router;
