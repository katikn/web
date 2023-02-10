<template>
    <div v-if="GETPOPUP"
        style="border: 1px solid black; position: relative; width:500px; height: 600px; margin: auto; background-color: rgb(253, 253, 253)">
        <button style="width: 30px; height: 30px; position: absolute; top: 10px; right: 10px;" @click="openPopUp">X</button>
        <p style="position: absolute; margin: 50px 50%;">{{ GETTEST }}</p>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'GETTEST',
            'GETPOPUP'
        ])
    },
    methods: {
        ...mapMutations([
            'changeView',
            'openPopUp'
        ])
    }
}
</script>