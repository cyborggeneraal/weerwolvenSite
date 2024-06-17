<template>
    <main>
        <div>
            <BTableSimple selectionVariant="secondary">
                <col />
                <col />
                <col />
                <col />
                <col />
                <BThead head-variant="dark">
                    <BTr>
                        <BTh>Player name</BTh>
                        <BTh>Role</BTh>
                        <BTh>Team</BTh>
                        <BTh>Status</BTh>
                        <BTh></BTh>
                    </BTr>
                </BThead>
                <BTbody>
                    <BTr v-for="player in players">
                        <BTh>{{ player.username }}</BTh>
                        <BTd>{{ player.role }}</BTd>
                        <BTd>{{ player.team }}</BTd>
                        <BTd>{{ player.health_status }}</BTd>
                        <BTd><BLink class="btn btn-primary" pill variant="primary" :to="player_url(player.username)">View actions</BLink></BTd>
                    </BTr>
                </BTbody>
            </BTableSimple>
        </div>
    </main>
</template>

<script>
import {BLink, BTableSimple, BThead, BTbody, BTr, BTh, BTd} from 'bootstrap-vue-next'

export default {
    name: "playersOverview",
    components: {
        BLink,
        BTableSimple,
        BThead,
        BTbody,
        BTr,
        BTh,
        BTd
    },
    data() {
        return {
            players: []
        }
    },
    methods: {
        player_url(username) {
            return "/games/" + this.$route.params.id + "/actions/" + username
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