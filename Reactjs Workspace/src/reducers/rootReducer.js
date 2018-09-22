import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import userReducer from './userReducer';

// combineReducers function takes an object
// with key:value pairs of reducers
export default combineReducers({
    contactsReducer,
    userReducer
});
