import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

// Create model from the above schema
const EventMessage = mongoose.model('EventMessage', eventSchema);

export default EventMessage;