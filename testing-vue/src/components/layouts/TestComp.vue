<template>
    <div>
        <!-- {{key}} <br>
        {{ array[0] }}
        {{ array[1] }}
        {{ array[2] }}
        <br>
        {{ obj['k'] }} -->


        <!-- <form action="">
            <input type="text" v-model="name"> <br>
            <input type="password" v-model="passw">
        </form>
        <h1>Добро пожаловать {{ name }}</h1> -->

        <!-- <input type="text" v-model="a"> 
        + 
        <input type="text" v-model="b"> 
        = 
        <b>{{ result }}</b> -->
        <!-- eslint-disable  -->
        <!-- <ul v-for="(elem, i) in test" :key="i">
            <li v-for="(e, j) in elem" :key="j">
                {{ e }}
            </li>
        </ul>
        <section>
            <template v-for="(elem, i) in test" :key="i">
                <h1>a</h1>
                <div class="class">
                    <h2>b</h2>
                </div>
            </template>
        </section> -->
        <!-- <div>
            <input type="text" name="data" v-model="data"><button @click="updateList">+</button>
            <h6>Не выполненные таски</h6>
            <ul>
                <li v-for="(elem, i) in list" :key="i">
                    {{ elem }} <button @click="deleteElem(i, list)">X</button> <button @click="tickTask(i)">✔</button>
                </li>
            </ul>
            <h6>Выполненные таски</h6>
            <ul>
                <list-element 
                v-for="(elem, i) in tickedlist" 
                :key="i"
                :elem="elem"
                :id="i">
            
                </list-element>
            </ul>
        </div> -->
        <div class="properties">
            <input type="text" v-model="colors" placeholder="Цвет">
            <input type="text" v-model="patterns" placeholder="Узор">
            <input type="text" v-model="border" placeholder="Обводка, цвет">
            <input type="text" v-model="size" placeholder="Размер: small, middle, big"> <br>
            <button @click="appendBall">Создать</button>
        </div>
        <div class="balls">
            <new-year-ball 
            v-for="(ball, i) in balls"
            :size="ball.size"
            :border="ball.border"
            :pattern="ball.pattern"
            :color="ball.color"
            :key="i"/>
        </div>
    </div>
</template>

<script>
// import ListElement from './list-element/ListElement.vue'
import NewYearBall from './list-element/NewYearBall.vue'
export default {
    components: {
        NewYearBall
    },
    data() {
        return {
            key: "Hello, World!",
            array: [1, 2, 3],
            obj: {
                k: 'y'
            },
            name: '',
            passw: '',
            a: 0,
            b: 0,
            test: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 0]],
            list: [],
            tickedlist: [],
            data: '',
            balls: [],
            colors: '',
            patterns: '',
            border: '',
            size: ''
        }
    },
    computed: {
        result() {
            return Number(this.a) + Number(this.b)
        }
    },
    methods: {
        updateList() {
            this.list.push(this.data)
            this.data = ''
        },
        deleteElem(i, arr) {
            arr.splice(i, 1);
        },
        tickTask(i) {
            this.tickedlist.push(this.list.splice(i, 1)[0])
        },
        untickTask(i) {
            this.list.push(this.tickedlist.splice(i, 1)[0])
        },
        appendBall(){
            this.balls.push({
                size: this.size,
                color: this.color,
                pattern: this.pattern,
                border: this.border
            })
            this.size = ''
            this.color = ''
            this.pattern = ''
            this.border = ''
        }
    }
}
</script>
<style>
.balls {
    display: flex;
}
</style>