import {ofType} from 'redux-observable';
import {LOGIN} from '../actions/login.actions';
import {switchMap} from 'rxjs/operators';
import {empty, merge} from 'rxjs';

const loginEpic = action$ =>
    action$.pipe(
        ofType(LOGIN),
        switchMap(action => {
            console.log('login...');
            return empty();
        })
    );

const logoutEpic = action$ =>
    action$.pipe(
        ofType(LOGIN),
        switchMap(action => {
            console.log('logout...');
            return empty();
        })
    );
export default function LoginEpics(action$) {
    return merge(loginEpic(action$), logoutEpic(action$));
}
