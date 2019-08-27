import {ofType} from 'redux-observable';
import {LOAD_CONTACTS, loadContactsDone} from '../actions/contacts.actions';
import {switchMap, map, catchError, mergeMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {of, merge, empty, forkJoin} from 'rxjs';
import UserApi from '../../api/user';

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

export default function ContacsEpics(action$) {
    return merge(LoadContactsEpic(action$));
}
