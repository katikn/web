<template>
    <div>
        <!-- {{ elem }} <button @click="this.$parent.deleteElem(id, list)">X</button>  -->
        <!-- <button @click="untickTask(i)">○</button> -->
        <div class="ball" :class="[size, border, pattern, color]"></div>
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String, 
            default: "small"},
        border: {
            type: String,
            default: ''
        },
        pattern: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: 'white'
        }
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss">
.ball{
    border-radius: 1000px;
    background-color: white;
    border: 1px solid red;
    width: 10px;
    height: 10px;
    &:not(:last-child){
        margin-right: 10px;
    }
    &.small {
        width: 50px;
        height: 50px;
    }
    &.middle {
        width: 75px;
        height: 75px;
    }
    &.big {
        width: 100px;
        height: 100px;
    }
    // background-color: ;
    // background-image: url('../../../assets/patterns/1.png');
}

.gold {
    border-color: gold;
}
.black {
    border-color: black;
}
</style>