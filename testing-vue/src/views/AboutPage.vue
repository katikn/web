<template>
    <div>
        <h1>Обо мне</h1>
        <button @click="goto">Go to secret :)</button>
    </div>
</template>
<script>
export default {
    methods: {
        goto(){
            this.$router.push({name: 'secret'})
        }
    }
}
</script>