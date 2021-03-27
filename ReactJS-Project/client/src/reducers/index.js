import { combineReducers } from 'redux';

// importing properties from reducers -> index.js
import properties from './properties';

export const reducers = combineReducers({
    properties: properties,
})