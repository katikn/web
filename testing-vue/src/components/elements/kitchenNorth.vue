<template>
    <h1>Кухня</h1>
    <button @click="goto">Пойти на запад</button>
</template>

<script>
export default {
    methods: {
        goto(){
            this.$router.push({path: '/hall/north'})
        }
    }
}
</script>