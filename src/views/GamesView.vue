<template>
    <main>
        <div v-for="game in games">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ game.name }}</h5>
                    <p class="card-text">Description</p>
                    <a :href="players_url(game.id)" class="btn btn-primary">View game</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "Games",
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