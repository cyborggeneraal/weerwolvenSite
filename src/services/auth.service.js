import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

class AuthService {
    login(user) {
        const params = new URLSearchParams();
        params.append('username', user.username);
        params.append('password', user.password);
        return axios
            .post(API_URL + 'user/token', params, config)
            .then(response => {
                if (response.data.access_token) {
                    localStorage.setItem('token', JSON.stringify(response.data));
                }

                return response.data;
            })
    }

    logout() {
        localStorage.removeItem('token');
    }

    register(user) {
        return axios.post(API_URL + '/user', {
            username: user.username,
            password: user.password
        })
    }
}

export default new AuthService();