import { combineReducers } from 'redux';

// importing properties from reducers -> index.js
import properties from './properties';

export default combineReducers({
    properties: properties,
})