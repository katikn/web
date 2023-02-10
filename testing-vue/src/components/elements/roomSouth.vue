<template>
    <h1>Комната 1</h1>
    <p>
        {{ this.$store.state.test }}
        {{ GETTEST }}
    </p>
    <div v-if="view">
        {{ GETTEST }}
    </div>
    <button @click="changeView">Да</button> <br> <br>
    <button @click="goto">Пойти на восток</button>
    <button v-if="!GETPOPUP" style="width: 100px;" @click="openPopUp">X</button>
    <pop-up></pop-up>
</template>

<script>
import { mapMutations, mapGetters, mapState } from 'vuex';
import popUp from '@/components/elements/popUp.vue'
export default {
    components: {
        popUp
    },
    computed: {
        ...mapState([
            'view'
        ]),
        ...mapGetters([
            'GETTEST',
            'GETPOPUP'
        ])
    },
    methods: {
        goto() {
            this.$router.push({ path: '/hall/south' })
        },
        ...mapMutations([
            'changeView',
            'openPopUp'
        ])
    }
}
</script>