<template>
    <main>
        <nav class="navbar navbar-expand bg-primary p-2">
            <div class="container-fluid">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <BLink class="nav-link" to="/">Home</BLink>
                </li>
                <li class="nav-item">
                    <BLink class="nav-link" to="/games">Games</BLink>
                </li>
                </ul>
                <span class="navbar-text">
                    <BButton class="btn btn-outline-dark btn-light m-2" v-if="loggedIn" @click="logout">Logout</BButton>
                    <BButton class="btn btn-outline-dark btn-light m-2" v-else href="/login">Login</BButton>
                </span>
            </div>
        </nav>
    </main>
</template>

<script>
import {BButton, BLink} from 'bootstrap-vue-next'

export default {
    name: "navbar",
    components: {
        BButton,
        BLink
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn
        }
    },
    methods: {
        logout() {
            console.log("logout");
            this.$store.dispatch('auth/logout').then(
                () => {
                    this.$router.push('/login');
                },
                () => {
                    console.log("Error");
                }
            )
        }
    }
}
</script>