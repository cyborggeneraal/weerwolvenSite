<template>
    <main>
        <h1 class="m-2">Pending</h1>
        <BCard
            header="vision"
        >
        <BForm>
            <div class="row my-2">
                <div class="col-3">
                    <BInputGroup propend="target">
                        <BFormInput placeholder="target"/>
                    </BInputGroup>
                </div>
            </div>
            <BButton variant="primary" class="my-2">Update</BButton>
        </BForm>
        </BCard>
        <h1 class="m-2">History</h1>
    </main>
</template>

<script>
import {BCard, BForm, BInputGroup, BFormInput, BButton} from 'bootstrap-vue-next';

export default {
    data () {
        return {
            gameId: null,
            username: null,
        }
    },
    components: {
        BCard,
        BForm,
        BInputGroup,
        BFormInput,
        BButton
    },
    mounted() {
        this.gameId = this.$route.params.id
        this.username = this.$route.params.username
    }
}
</script>