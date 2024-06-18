<template>
    <main>
        <div v-if="role" v-for="action in role.actions">
            <Action :action="action" />
        </div>
        <BButton variant="primary" class="mx-2">Update</BButton>
    </main>
</template>

<script>
import {BButton} from 'bootstrap-vue-next'
import Action from './Action.vue'

export default {
    props: ['role'],
    components: {
        Action,
        BButton
    }
}
</script>