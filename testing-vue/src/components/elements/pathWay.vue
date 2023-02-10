<template>
    <h1>Тропинка</h1>
    <div style="width: 200px; border: 1px solid black">
        <h2>HP: {{ getHP }}</h2>
        <h2>Урон: {{ getStrength }}</h2>
    </div>
    
    <h3>Через некоторое время вы вышли к развилке. Но куда же пойти? - вот в чём вопрос.</h3>
    <ul>
        <li><h3>Пещера с гоблинами</h3></li>
        <li><h3>Логово Босса</h3></li>
    </ul>

    <h4>"Если пойти в пещеру, то можно увеличить свои характеристики благодаря убийствам гоблинов. Если пойти сразу к боссу, то придётся биться со своими нынешними силами и HP. Куда же пойти?.." - подумал Путник</h4>
    <button @click="gotoCave">Пещера с гоблинами</button> |
    <button @click="gotoBoss">Логово Босса</button>

</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getHP',
            'getStrength'
        ])
    },
    methods: {
        gotoCave(){
            this.$router.push({ path: '/cave' })
        },
        gotoBoss(){
            this.$router.push({ path: '/boss' })
        },
    }
}
</script>