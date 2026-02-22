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
    },
    {
        timestamps: true, // Automatically manages createdAt and updatedAt
    }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
