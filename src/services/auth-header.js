export default function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'));

    if (token && token.access_token) {
        return { Authorization: 'Bearer ' + token.access_token };
    }
}