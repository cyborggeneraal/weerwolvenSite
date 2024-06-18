<template>
    <main>
        <h1 class="m-2">Pending</h1>
        <Pending :role="actionStructure" />
        <h1 class="m-2">History</h1>
    </main>
</template>

<script>
import {BCard, BForm, BInputGroup, BFormInput, BButton} from 'bootstrap-vue-next';
import Pending from '@/components/actions/Pending.vue';
import actionStructures from '@/services/actions.service';

export default {
    data () {
        return {
            gameId: null,
            username: null,
            actionStructure: null
        }
    },
    components: {
        BCard,
        BForm,
        BInputGroup,
        BFormInput,
        BButton,
        Pending
    },
    mounted() {
        this.gameId = this.$route.params.id;
        this.username = this.$route.params.username;

        actionStructures.forEach((actionStructure) => {
            if (actionStructure.role == "witch") {
                this.actionStructure = actionStructure
            }
        })
    }
}
</script>