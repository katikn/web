<template>
    <h1>Логово Босса</h1>

    <div style="width: 200px; border: 1px solid black">
        <h2>HP: {{ getHP }}</h2>
        <h2>Урон: {{ getStrength }}</h2>
    </div>


</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getHP',
            'getStrength'
        ])
    },
    methods: {
        ...mapMutations([
            
        ])
    }
}
</script>