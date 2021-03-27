import { combineReducers } from 'redux';

// importing events from reducers -> index.js
import events from './events';

export const reducers = combineReducers({
    events: events,
})