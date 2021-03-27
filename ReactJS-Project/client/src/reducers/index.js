import { combineReducers } from 'redux';

// importing properties from reducers -> index.js
import events from './events';

export const reducers = combineReducers({
    events: events,
})