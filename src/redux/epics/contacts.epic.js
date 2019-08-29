import {ofType} from 'redux-observable';
import {
    LOAD_CONTACTS,
    loadContactsDone,
    CONNECT_CONTACTS,
    registerSubscribeContacts,
    updateListContact,
    DISCONNECT_CONTACTS,
    UPDATE_LIST_CONTACT,
    updateListContactDone
} from '../actions/contacts.actions';
import {switchMap, map, catchError, mergeMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {of, merge, empty, forkJoin} from 'rxjs';
import UserApi from '../../api/user';
import store from '../store';

const LoadContactsEpic = action$ =>
    action$.pipe(
        ofType(LOAD_CONTACTS),
        switchMap(action => {
            return UserApi.getAllActiveUsers().pipe(
                mergeMap(useractives => {
                    const obsUsers = useractives.map(user => {
                        return UserApi.get(user.id).pipe(
                            map(userData => ({
                                ...userData,
                                ...user
                            })),
                            catchError(error =>
                                of({
                                    ...user,
                                    success: false
                                })
                            )
                        );
                    });
                    return forkJoin(...obsUsers);
                }),
                map(users => loadContactsDone(users)),
                catchError(error => of(loadContactsDone(error)))
            );
        })
    );
const ConnectActiveUsers = action$ =>
    action$.pipe(
        ofType(CONNECT_CONTACTS),
        switchMap(action => {
            return UserApi.connectActiveUsers(useractives => {
                store.dispatch(updateListContact(useractives));
            }).pipe(map(registerSubscribeContacts));
        })
    );
const UpdateListContactsEpic = action$ =>
    action$.pipe(
        ofType(UPDATE_LIST_CONTACT),
        switchMap(({payload}) => {
            return of(payload).pipe(
                mergeMap(activeUsers => {
                    const obsUsers = activeUsers.map(user =>
                        UserApi.get(user.id).pipe(
                            map(userData => ({...userData, ...user}))
                        )
                    );
                    return forkJoin(...obsUsers);
                }),
                map(updateListContactDone)
            );
        })
    );
const DisconnectActiveUsers = action$ =>
    action$.pipe(
        ofType(DISCONNECT_CONTACTS),
        switchMap(action => {
            store.getState().ContactsReducer.unsubscribe();
            return empty();
        })
    );
export default function ContacsEpics(action$) {
    return merge(
        LoadContactsEpic(action$),
        ConnectActiveUsers(action$),
        DisconnectActiveUsers(action$),
        UpdateListContactsEpic(action$)
    );
}
