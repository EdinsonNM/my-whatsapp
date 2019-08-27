import {ofType} from 'redux-observable';
import {LOGIN, LOGOUT, loginDone, LOGIN_DONE} from '../actions/login.actions';
import {switchMap, map, catchError, mergeMap} from 'rxjs/operators';
import {empty, merge, of} from 'rxjs';
import UserApi from '../../api/user';

const loginEpic = action$ =>
    action$.pipe(
        ofType(LOGIN),
        switchMap(({payload}) => {
            return UserApi.login(payload.email, payload.password).pipe(
                mergeMap(user => {
                    return UserApi.get(user.uid).pipe(
                        map(userData => ({...userData, uid: user.uid}))
                    );
                }),
                mergeMap(user => {
                    return UserApi.connectUser(user.uid).pipe(map(() => user));
                }),
                map(loginDone),
                catchError(error => of(loginDone(error)))
            );
        })
    );

const logoutEpic = action$ =>
    action$.pipe(
        ofType(LOGOUT),
        switchMap(action => {
            console.log('logout...');
            return empty();
        })
    );

const loginDoneEpic = action$ =>
    action$.pipe(
        ofType(LOGIN_DONE),
        switchMap(({payload}) => {
            if (payload.uid) {
                console.log('redirect successful');
                //history.push('/main');
                return empty();
            }
        })
    );
export default function LoginEpics(action$) {
    return merge(
        loginEpic(action$),
        logoutEpic(action$),
        loginDoneEpic(action$)
    );
}
