import Property from '../models/property.js';


export const getProperties = async (req, res) => {

    try {
        const allProperties = await Property.find();
        res.status(200).json(allProperties);

    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};

export const createProperty = async (req, res) => {
    const property = req.body;

    const newProperty = new Property(property)

    try {
        await newProperty.save()
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(409).json({ message: error.message});        
    }
}