import {combineEpics} from 'redux-observable';
import ContacsEpics from './contacts.epic';
import LoginEpics from './login.epic';

export default combineEpics(ContacsEpics, LoginEpics);
