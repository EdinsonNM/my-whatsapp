import api from './api';
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
        return api.post('active-users', {id, loginAt});
    }
}
