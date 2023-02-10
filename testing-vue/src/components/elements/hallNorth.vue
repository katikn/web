<template>
    <h1>Северный Холл</h1>
    <button @click="gotonorth">Пойти на север</button>
    <button @click="gotosouth">Пойти на юг</button>
    <button @click="gotoeast">Пойти на восток</button>
</template>

<script>
export default {
    methods: {
        gotonorth(){
            this.$router.push({path: '/balcony'})
        },
        gotosouth(){
            this.$router.push({path: '/hall/south'})
        },
        gotoeast(){
            this.$router.push({name: 'kitchen'})
        },
    }
}
</script>