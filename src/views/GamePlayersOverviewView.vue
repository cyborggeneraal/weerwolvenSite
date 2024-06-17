<template>
    <main>
        <div>
            <BTable striped :items="players" />
        </div>
    </main>
</template>

<script>
import {BTable} from 'bootstrap-vue-next'

export default {
    name: "playersOverview",
    components: {
        BTable
    },
    data() {
        return {
            players: []
        }
    },
    mounted() {
        this.$store.dispatch('games/loadPlayersList', this.$route.params.id).then(
            () => {
                this.players = this.$store.state.games.playersList
            },
            () => {
                this.players = null;
            }
        );
    }
}
</script>