import {combineReducers} from 'redux';
import LoginReducer from 'login.reducer';
import ContactsReducer from 'contacts.reducer';
export default combineReducers({
    LoginReducer,
    ContactsReducer
});
