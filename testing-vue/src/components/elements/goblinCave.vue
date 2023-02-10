<template>
    <div class="game">
        <h1>Пещера с гоблинами</h1>
        <h3>Ну что ж, Путник, добро пожаловать в пещеру с гоблинами, в которой тебе предстоит сражаться с гоблинами (их
            всего 20). После успешного прохождения Вы увеличите вашу силу в 2 раза!</h3>
        <h2>Правила: </h2>
        <p> Вы можете либо атаковать гоблина, либо защититься. После каждого хода, вы сами выбираете,
            что сделать.</p>
        <p>В случае атаки: Гоблин случайным образом может контратаковать и
            нанести урон вам, увернуться и не получить урона, или ничего не
            сделать и впитать урон полностью. Например, вы атакуете, и гоблин
            ВНЕЗАПНО контратакует на том же ходе.</p>
        <p>В случае защиты: Когда гоблин ходит, вы не получите
            урона и также можете случайно получить прибавку к урону на 1 ход в два
            раза. Также защита может пройти неудачно, тогда игрок получит
            половину урона от гоблина.</p>
        <button v-if="getGoblinsCounter == -1" @click="startCave">Старт</button>
        <div v-if="getGoblinsCounter != -1">
            <div class="card">
                <div style="width: 200px; border: 1px solid black; float: left; margin-right: 10px;">
                    <p> Ваша статистика:</p>
                    <h2>HP: {{ getHP }}</h2>
                    <h2>Урон: {{ getStrength }}</h2>
                </div>
                <div style="width: 200px; border: 1px solid red; float: left; margin-right: 10px;">
                    <p> Статистика гоблина:</p>
                    <h2>HP: {{ getGoblinsHp }}</h2>
                    <h2>Урон: {{ getGoblinsStrength }}</h2>
                </div>
                <h2>Побеждено гоблинов: {{ getGoblinsCounter }}</h2>
            </div>
            <div class="game" v-if="getWhoPlay != -1">
                <div v-if="getWhoPlay == 0">
                    <h2>Ход Путника:</h2>
                    <button v-if="getAttacc == 0 && getProtecc == 0" @click="setAttacc">Атаковать</button>
                    <button v-if="getProtecc == 0 && getAttacc == 0" @click="setProtecc">Защититься</button>
                    <h2 v-if="getAttacc > 0 && getAttacc <= 30"> Вам не повезло, и гоблин провёл контратаку и нанёс вам урон. (но вы всё равно смогли нанести урон!)</h2>
                    <h2 v-if="getAttacc > 30 && getAttacc <= 60"> Вам не повезло, и гоблин увернулся от вашего удара.</h2>
                    <h2 v-if="getAttacc > 60 && getAttacc <= 90"> Вам повезло и вы нанесли урон гоблину полностью.</h2>
                    <button v-if="getAttacc != 0" @click="checkAndSwitchPlayer">Пройти дальше</button>
                    <h2 v-if="getProtecc != 0"> Вы решили защититься и не атаковать</h2>
                    <button v-if="getProtecc != 0" @click="checkAndSwitchPlayer">Пройти дальше</button>
                </div>
                <div v-else>
                    <h2>Ход гоблина:</h2>
                    <h2 v-if="getProtecc == 1">В прошлом ходе вы выбрали защиту, и сейчас гоблин не смог по вам ударить и тем самым нанести урон!</h2>
                    <h2 v-if="getProtecc == 2">В прошлом ходе вы выбрали защиту, и к сожалению гоблин смог пробить её наполовину, т.е. нанести 1 урон</h2>
                    <h2 v-if="getProtecc == 0">Гоблин провёл атаку по вам и нанёс 2 урона.</h2>
                    <button v-if="getProtecc != -1" @click="checkAndSwitchGoblin">Пройти дальше</button>
                </div>
            </div>
            <div v-else>
                <button @click="randomStart">Пройти к следующему гоблину</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getHP',
            'getStrength',
            'getGoblins',
            'getGoblinsCounter',
            'getGoblinsHp',
            'getGoblinsStrength',
            'getWhoPlay',
            'getAttacc',
            'getProtecc',
            'getrandRandom'
        ])
    },
    methods: {
        ...mapMutations([
            'startCave',
            'randomStart',
            'setAttacc',
            'setProtecc',
            'checkAndSwitchPlayer',
            'checkAndSwitchGoblin',
            'randRandom'
        ])
    }
}
</script>

<style>
.game {
    width: 800px;
    position: relative;
    margin: 0 auto;
}

p {
    font-size: 20px;
}

.card {
    overflow: hidden;
    margin-top: 10px;
}
</style>