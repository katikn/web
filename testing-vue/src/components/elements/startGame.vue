<template>
    <h1>Добро пожаловать!</h1>
    <h4>Дорогой путник, вы можете выбрать один из трёх классов: Маг, Паладин и Лучник. У каждого из них своя особенность:</h4>
    <h3>Маг имеет 60 единиц здоровья и 12 урона</h3>
    <h3>Паладин имеет 80 единиц здоровья и 4 урона</h3>
    <h3>Лучник имеет 70 единиц здоровья и 6 урона</h3>
    <button @click="chooseWizard">Маг</button> |
    <button @click="choosePaladin">Паладин</button> |
    <button @click="chooseArcher">Лучник</button> <br> <br>
    <button v-if="getHP != 0" @click="goto">Начать своё путешествие</button>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getHP'
        ])
    },
    methods: {
        ...mapMutations([
            'chooseWizard',
            'choosePaladin',
            'chooseArcher'
        ]),
        goto(){
            this.$router.push({path: '/path'})
        }
    }
}
</script>