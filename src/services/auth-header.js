export default function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + token.accessToken };
    }
}