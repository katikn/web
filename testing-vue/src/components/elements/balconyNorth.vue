<!-- eslint-disable -->
<template>
    <h1>Балкон</h1>
    <button @click="gotosouth">Пойти на юг</button>
</template>
<script>
export default {
    methods: {
        gotosouth(){
            this.$router.push({path: '/hall/north'})
        }
    }
}
</script>