<template>
    <div>
        <form @submit="login">
            <input v-model="email" type="email" placeholder="email">
            <input v-model="password" type="password" placeholder="password">
            <button type="submit">Sign in</button>
        </form>
    </div>
</template>

<script>
// import { newUser } from '@/api/index.js';
import { loginUser, loginUser2 } from '@/api/index.js'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login(e) {
            e.preventDefault()
            loginUser(this.email, this.password).then((res) => {
                const { jwt, user } = res.data
                window.localStorage.setItem('jwt', jwt)
                window.localStorage.setItem('userData', JSON.stringify(user))
                loginUser2(user.id, jwt).then((res2) => {
                    window.localStorage.setItem('articles', JSON.stringify(res2?.data?.articles || []))
                    this.$router.push('/')
                    console.log(res);
                    console.log(res2);
                })
            })
        }

    },
    beforeCreate() {

    }
}
</script>