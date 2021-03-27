import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (properties = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return properties.map((property) => (property._id === action.payload._id ? action.payload : property));
    case CREATE:
      return [...properties, action.payload];
    case UPDATE:
      return properties.map((property) => (property._id === action.payload._id ? action.payload : property));
    case DELETE:
      return properties.filter((property) => property._id !== action.payload);
    default:
      return properties;
  }
};

