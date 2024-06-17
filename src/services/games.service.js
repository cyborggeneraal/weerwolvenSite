import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/games/';

class GamesService {
    getAllHostGames() {
        return axios.get(API_URL + 'host', {headers: authHeader()});
    }

    getGamePlayersList(id) {
        return axios.get(API_URL + id + '/players', {headers: authHeader()});
    }
}

export default new GamesService();