import mongoose from 'mongoose';

const propertySchema = mongoose.Schema({
    type: String,
    floor: Number,
    seller: String,
    description: String,
    images: [String],
    initialPrice: Number,
    startDate: Date,
    endDate: Date,
    bid: {
       bidPrice: Number,
       bidDate: Date(), 
    },
    isActive: Boolean,
});

const Property = mongoose.model('Property', propertySchema);

export default Property;