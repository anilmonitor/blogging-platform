import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
        },
        description: {
            type: String,
            required: [true, 'Please add a description'],
        },
        photo: {
            type: String,
            required: [true, 'Please provide a photo URL from the internet'],
        },
        author: {
            type: String,
            required: [true, 'Please specify the author username'],
        }
    },
    {
        timestamps: true, // Automatically manages createdAt and updatedAt
    }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
