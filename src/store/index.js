import { createStore } from "vuex";
import { auth } from "./auth.module";
import { games } from "./games.module";

const store = createStore({
    modules: {
        auth,
        games,
    }
});

export default store;