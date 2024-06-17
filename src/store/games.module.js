import GamesService from '../services/games.service'

const initialState = {gamesList: [], playersList: []}

export const games = {
    namespaced: true,
    state: initialState,
    actions: {
        collectGames({ commit }) {
            return GamesService.getAllHostGames().then(
                response => {
                    commit('getAllHostGamesSuccess', response.data);
                    return Promise.resolve(response);
                },
                error => {
                    commit('getAllHostGamesFailure');
                    return Promise.reject(error);
                }
            )
        },
        loadPlayersList({commit}, id) {
            return GamesService.getGamePlayersList(id).then(
                response => {
                    commit('loadPlayersListSuccess', response.data);
                    return Promise.resolve(response);
                },
                error => {
                    commit('loadPlayersListFailure');
                    return Promise.reject(error);
                }
            )
        }
    },
    mutations: {
        getAllHostGamesSuccess(state, games) {
            state.gamesList = games;
        },
        getAllHostGamesFailure(state) {
            state.gamesList = null;
        },
        loadPlayersListSuccess(state, players) {
            state.playersList = players;
        },
        loadPlayersListFailure(state) {
            state.playersList = null;
        }
    }
}