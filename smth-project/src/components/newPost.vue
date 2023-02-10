<template>
    <form @submit="newpost">
        <input v-model="title" type="text" placeholder="title">
        <input v-model="description" type="text" placeholder="description">
        <button type="submit">Post!</button>
    </form>
</template>

<script>
import { makenewPost } from '@/api/index.js';
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
export default {
    data() {
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        async newpost(e) {
            e.preventDefault()
            const sec = localStorage.getItem('jwt');
            makenewPost(sec, this.title, this.description).then((res) => {
                console.log(res);
                this.$router.push('/')
            })
        }
    }
}
</script>

<!-- <style>
div {
    display: flex;
}

.card {
    display: inline;
    width: 300px;
    height: 400px;
}
</style> -->