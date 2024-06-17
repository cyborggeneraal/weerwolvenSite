<template>
    <main>
        <div v-for="game in games">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ game.name }}</h5>
                    <p class="card-text">Description</p>
                    <BLink :to="players_url(game.id)" class="btn btn-primary">View game</BLink>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {BLink} from 'bootstrap-vue-next';

export default {
    name: "Games",
    components: {
        BLink
    },
    computed: {
        games() {
            return this.$store.state.games.gamesList
        }
    },
    methods: {
        players_url(id) {
            return "/games/" + id + "/players"
        }
    },
    mounted() {
        this.$store.dispatch('games/collectGames').then();
    }
}
</script>