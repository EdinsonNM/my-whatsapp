import api from './api';
import {of} from 'rxjs';
export default class UserApi {
    static login(email, password) {
        return api.login(email, password);
    }
    static logout() {
        return api.logout();
    }
    static getAll() {
        return api.get('users', {});
    }
    static get(id) {
        return api.get(`users/${id}`, {});
    }
    static getAllActiveUsers() {
        return api.get('active-users', {});
    }
    static connectUser(id) {
        const loginAt = new Date();
        return api.post(`active-users/${id}`, {loginAt}, true);
    }

    static connectActiveUsers(next) {
        const unsubscribe = api.db
            .collection('active-users')
            .onSnapshot(querySnapshot => {
                const data = [];
                querySnapshot.forEach(function(doc) {
                    data.push({id: doc.id, ...doc.data()});
                });
                next(data);
            });
        return of(unsubscribe);
    }
}
