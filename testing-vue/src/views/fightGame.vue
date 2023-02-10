<template>
    <h1>Игра "Йоу"</h1>
    <button @click="goto">Начать игру</button>
</template>

<script>
export default {
    methods: {
        goto(){
            this.$router.push({path: '/startGame'})
        }
    }
}
</script>