<template>
    <form @submit.prevent="connecterUser">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="text" class="form-control" id="email" v-model="user.email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Mot de Passe</label>
            <input type="password" class="form-control" id="password" v-model="user.password">
        </div>

        <button type="submit" class="btn btn-primary" >Submit</button>
    </form>
</template>
<script>
import users from "@/services/users.js"
export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
        }
    },
    methods: {
        connecterUser(){
            console.log(this.user)
            users.loginUser(this.user)
        },
    },
}
</script>