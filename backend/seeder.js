import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Post from './models/Post.js';

dotenv.config();

const dummyPosts = [
    {
        title: 'Summer Aesthetic Vibes',
        description: 'Soaking up the sun by the beach. The golden hour lighting is completely unmatched right now. Loving this breezy white summer dress and the gentle sound of the waves. Perfection.',
        photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'City Street Style',
        description: 'Taking over the downtown streets with this edgy street style look. Oversized jackets and combat boots are my ultimate go-to for these chilly afternoons. Always stay confident.',
        photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Vintage Cafe Mood',
        description: 'Morning coffees at my favorite hidden vintage cafe. The aesthetic here is so Pinterest. Wearing my favorite thrifted oversized sweater and reading a good book. Best morning ever.',
        photo: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Golden Hour Portrait',
        description: 'Chasing the golden hour. The sunlight makes everything look so warm and magical. Keeping the makeup simple and glowy. Nature really has the best lighting.',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Minimalist Fashion',
        description: 'Less is more. Focusing on clean lines, neutral colors, and subtle accessories. This minimalist approach to fashion has completely changed how I style my outfits daily.',
        photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Boho Chic Adventures',
        description: 'Exploring the botanical gardens in true bohemian spirit. Lots of floral patterns, flowing skirts, and natural hair. Let your spirit run free and embrace the nature around you.',
        photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Cozy Winter Knitwear',
        description: 'Layering up for the winter! There is nothing better than a chunky knit sweater, a warm scarf, and a hot cup of cocoa. Cold days are basically just an excuse for cute outfits.',
        photo: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Fairycore Flow',
        description: 'Feeling like a woodland fairy. Embracing the fairycore aesthetic with delicate fabrics, soft pastels, and wandering through the tall grass in the meadow. Pure bliss.',
        photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Denim on Denim',
        description: 'Bringing back the classic double denim look. A good pair of vintage jeans paired with a cropped denim jacket. It\'s timeless, effortless, and always makes a statement.',
        photo: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&q=80&w=1200'
    },
    {
        title: 'Sunset Silhouettes',
        description: 'Watching the sunset dye the sky in shades of pink and orange. Capturing this beautiful silhouette right before the day ends. Keep chasing those beautiful moments.',
        photo: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200'
    }
];

const seedDB = async () => {
    try {
        await connectDB();

        // Clear existing data 
        await Post.deleteMany();

        // Insert new dummy data
        await Post.insertMany(dummyPosts);

        console.log('✅ Pinterest Viral Aesthetic Data Imported Successfully!');
        process.exit();
    } catch (error) {
        console.error(`❌ Error with data import: ${error}`);
        process.exit(1);
    }
};

seedDB();
