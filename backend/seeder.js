import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Post from './models/Post.js';

dotenv.config();

const dummyPosts = [
    {
        title: 'Exploring the Swiss Alps',
        description: 'A breathtaking journey through the snow-capped mountains of Switzerland. The pristine valleys and the sheer height of the Matterhorn make it a once-in-a-lifetime experience. We spent our days hiking in the glorious sunshine and our evenings resting in cozy wooden chalets.',
        photo: 'https://images.unsplash.com/photo-1542435503-956c269c0d5e?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'The Busy Streets of Tokyo',
        description: 'Immersing in the neon lights and the incredibly fast-paced life of Tokyo, Japan. From the famous Shibuya Crossing to the serene Meiji Shrine, the contrast between the ultra-modern technology and deep-rooted ancient traditions is fascinating.',
        photo: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'A Weekend in Paris',
        description: 'Romance, architecture, and the best pastries in the world. Walking along the Seine river at sunset and admiring the Eiffel Tower sparkling in the night sky. The Louvre Museum was massive, and getting lost in its corridors was half the fun.',
        photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Serenade of Santorini',
        description: 'The iconic blue domes against the stark white buildings of Oia. Watching the sunset here feels like stepping into a postcard. The food is incredibly fresh, and the Aegean sea is a blue you have to see to believe.',
        photo: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac542?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Wild Safari in Kenya',
        description: 'Encountered the Big Five in the Maasai Mara. Seeing elephants, lions, and giraffes in their natural habitat is completely awe-inspiring. The vast savannas stretch as far as the eye can see, and the local Maasai culture is beautiful.',
        photo: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Mystical Northern Lights',
        description: 'Braving the freezing temperatures in Iceland to witness the aurora borealis dancing across the sky. The green and pink lights look like magic. During the day, we explored massive waterfalls and black sand beaches.',
        photo: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Culinary Tour of Italy',
        description: 'Eating our way through Rome, Florence, and Naples. The authentic Neapolitan pizza ruined all other pizzas for me, and the homemade pasta was divine. Also threw a coin into the Trevi Fountain so I can definitely return.',
        photo: 'https://images.unsplash.com/photo-1516483638261-f40af5ebcf89?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'New York City Hustle',
        description: 'The city that never sleeps. Standing in the middle of Times Square is entirely overwhelming in the best way possible. Took a walk through Central Park to escape the concrete jungle, and ended the trip with a Broadway show.',
        photo: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Relaxing in Maldives',
        description: 'Staying in an overwater bungalow with crystal-clear turquoise waters right off the deck. Spent the whole week snorkeling, reading books, and completely unwinding. An absolute paradise on Earth.',
        photo: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Ancient Wonders: Machu Picchu',
        description: 'Hiking the Inca Trail was challenging but standing above the ancient ruins at dawn made every step worth it. The history here feels palpable. The high altitudes take a toll, but the mystical feeling of the cloudy mountains is unforgettable.',
        photo: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80&w=1200'
    }
];

const seedDB = async () => {
    try {
        await connectDB();

        // Clear existing data (optional, but good for fresh runs)
        // await Post.deleteMany();

        // Insert dummy data
        await Post.insertMany(dummyPosts);

        console.log('✅ Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`❌ Error with data import: ${error}`);
        process.exit(1);
    }
};

seedDB();
