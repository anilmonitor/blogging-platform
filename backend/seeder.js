import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import User from './models/User.js';
import Post from './models/Post.js';

dotenv.config();

const dummyPosts = [
    {
        title: 'Exploring the Ocean',
        description: 'A beautiful day at the beach with crystal clear water and endless horizons. The perfect getaway.',
        photo: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'Mountain Adventures',
        description: 'Hiking up the highest peaks. The air up here is crisp and the views are absolutely breathtaking. Nature is amazing.',
        photo: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'Tech & Code',
        description: 'A deep dive into the world of programming. Coffee, dual monitors, and thousands of lines of code.',
        photo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'Forest Retreat',
        description: 'Wandering through the dense green forest. The sound of rustling leaves and a small creek completely clears the mind.',
        photo: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'City Lights',
        description: 'The vibrant neon lights of the city coming alive at night. A constant stream of energy and moving cars.',
        photo: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'Minimalist Workspace',
        description: 'A clean and aesthetic workspace leads to a clean mind. Featuring a modern laptop and nice indoor plants.',
        photo: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'Cozy Coffee Shop',
        description: 'Enjoying a warm latte in the corner of a vintage coffee shop on a rainy afternoon. Best feeling ever.',
        photo: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'Delicious Cuisine',
        description: 'Trying out local flavors. This beautiful artisanal culinary dish was not only visually stunning but also delicious.',
        photo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'Majestic Tiger',
        description: 'An incredible shot of a tiger in the wild. The sheer beauty and power of wildlife captured perfectly.',
        photo: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    },
    {
        title: 'Modern Architecture',
        description: 'Geometric patterns and sharp lines of a modern skyscraper reaching into the blue sky.',
        photo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
        author: 'unsplash_admin'
    }
];

const seedDB = async () => {
    try {
        await connectDB();

        // Clear existing data 
        await User.deleteMany();
        await Post.deleteMany();

        // Admin User Creation
        await User.create({
            name: "Super Administrator",
            username: "admin",
            email: "admin@blog.com",
            password: "admin",
            isAdmin: true
        });

        // Insert new dummy data
        await Post.insertMany(dummyPosts);

        console.log('✅ Random Unsplash Images Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`❌ Error with data import: ${error}`);
        process.exit(1);
    }
};

seedDB();
