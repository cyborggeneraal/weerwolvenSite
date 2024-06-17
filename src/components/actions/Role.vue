<template>
    <main>
        <div v-for="action in role.actions">
            <Action action="action" />
        </div>
    </main>
</template>

<script>
import Action from './Action.vue'

export default {
    props: ['role'],
    components: {
        Action
    }
}
</script>