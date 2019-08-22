import {ofType} from 'redux-observable';
import {LOAD_CONTACTS, loadContactsDone} from '../actions/contacts.actions';
import {switchMap, map, catchError} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
import {of, merge} from 'rxjs';

const LoadContactsEpic = action$ =>
    action$.pipe(
        ofType(LOAD_CONTACTS),
        switchMap(action => {
            return ajax.getJSON('https://randomuser.me/api?results=20').pipe(
                map(data => loadContactsDone(data.results)),
                catchError(error => of(loadContactsDone(error)))
            );
        })
    );

export default function ContacsEpics(action$) {
    return merge(LoadContactsEpic(action$));
}
