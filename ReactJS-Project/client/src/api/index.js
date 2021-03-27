import axios from 'axios';

const url = 'http://localhost:5000/properties';

export const fetchProperties = () => axios.get(url);
export const createProperty = (newProperty) => axios.post(url, newProperty);
export const likeProperty = (id) => axios.patch(`${url}/${id}/likeProperty`);
export const updateProperty = (id, updatedProperty) => axios.patch(`${url}/${id}`, updatedProperty);
export const deleteProperty = (id) => axios.delete(`${url}/${id}`);
