import mongoose from 'mongoose';

const propertySchema = mongoose.Schema({
    type: String,
    floor: Number,
    seller: String,
    description: String,
    images: [String],
    initialPrice: Number,
    startDate: String,
    endDate: String,
    bid: {
       bidPrice: Number,
       bidDate: String(), 
    },
    isActive: Boolean,
});

// Create model from the above schema
const Property = mongoose.model('Property', propertySchema);

export default Property;