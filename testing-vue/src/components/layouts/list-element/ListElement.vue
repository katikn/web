<template>
    <li>
        {{ elem }} <button @click="this.$parent.deleteElem(id, list)">X</button> 
        <!-- <button @click="untickTask(i)">○</button> -->
    </li>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 0
        },
        elem: {
            type: String,
            default: ""
        }

    }
}
</script>