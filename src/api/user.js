export default class UserApi {
    static getAll() {
        return fetch('https://randomuser.me/api?results=20').then(response =>
            response.json()
        );
    }
}
