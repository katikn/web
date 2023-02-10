<template>
    <h1>Южный Холл</h1>
    <button @click="gotonorth">Пойти на север</button>
    <button @click="gotowest">Пойти на запад</button>

</template>

<script>
export default {
    methods: {
        gotonorth(){
            this.$router.push({path: '/hall/north'})
        },
        gotowest(){
            this.$router.push({path: '/roomSouth'})
        },
    }
}
</script>