<template>
    <main>
        <div>
            <BTable selectionVariant="secondary" :items="players" />
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
            (error) => {
                console.log(error.response);
                if (error.response.status == 401) {
                    this.$store.dispatch('auth/logout');
                    this.$router.push('/login');
                }
                this.players = null;
            }
        );
    }
}
</script>