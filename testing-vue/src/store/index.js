import { createStore } from 'vuex'

export default createStore({
  state: {
    test: 'kek',
    view: false,
    popUp: false,
    wizard: false,
    paladin: false,
    archer: false,
    hp: 0,
    strength: 0,
    goblins: 20,
    goblinsCounter: -1,
    goblinsHp: 12,
    goblinsStrength: 2,
    whoPlay: -1,
    protecc: false,
    attacc: false,
    randomAttacc: 0,
    randomProtecc: 0,
    randRandom: -1
  },
  getters: {
    GETTEST(state){
      return state.test;
    },
    GETPOPUP(state){
      return state.popUp;
    },
    getHP(state){
      return state.hp;
    },
    getStrength(state){
      return state.strength;
    },
    getGoblins(state){
      return state.goblins;
    },
    getGoblinsCounter(state){
      return state.goblinsCounter;
    },
    getGoblinsHp(state){
      return state.goblinsHp;
    },
    getGoblinsStrength(state){
      return state.goblinsStrength;
    },
    getWhoPlay(state){
      return state.whoPlay;
    },
    getAttacc(state){
      return state.randomAttacc;
    },
    getProtecc(state){
      return state.randomProtecc;
    }
  },
  mutations: {
    changeView(state){
      state.view = !state.view
    },
    openPopUp(state){
      state.popUp = !state.popUp
    },
    chooseWizard(state){
      state.wizard = true;
      state.paladin = false;
      state.archer = false;
      state.hp = 60;
      state.strength = 12;
    },
    choosePaladin(state){
      state.wizard = false;
      state.paladin = true;
      state.archer = false;
      state.hp = 80;
      state.strength = 4;
    },
    chooseArcher(state){
      state.wizard = false;
      state.paladin = false;
      state.archer = true;
      state.hp = 70;
      state.strength = 6;
    },
    startCave(state){
      state.goblinsCounter = 0;
    },
    randomStart(state){
      state.whoPlay = Math.round(Math.random(0, 1))
    },
    setAttacc(state){
      state.attacc = true;
      state.protecc = false;
      state.randomAttacc = Math.round(Math.random() * (90 - 1) + 1)
      console.log(state.randomAttacc, 'attacc');
      if (state.randomAttacc > 0 && state.randomAttacc <= 30){
        state.hp -= state.goblinsStrength;
        state.goblinsHp -= state.strength;
      } else if (state.randomAttacc > 60 && state.randomAttacc <= 90) {
        state.goblinsHp -= state.strength;
      }
    },
    setProtecc(state){
      state.attacc = false;
      state.protecc = true;
      state.randomProtecc = Math.round(Math.random() * (2 - 1) + 1)
      console.log(state.randomProtecc, 'protecc');
    },
    checkAndSwitchPlayer(state){
      if (state.goblinsHp <= 0){
        state.goblinsHp = 12
        state.goblinsCounter += 1
        state.whoPlay = -1
        state.randomProtecc = 0
        state.randomAttacc = 0
      } else {
        state.whoPlay = 1
        state.randomAttacc = 0
      }
    },
    checkAndSwitchGoblin(state){
      state.whoPlay = 0
      if (state.randomProtecc == 0){
        state.hp -= state.goblinsStrength
      } else if (state.randomProtecc == 2){
        state.hp -= state.goblinsStrength / 2
      }
      state.randomProtecc = 0
      state.randomAttacc = 0
    }
  },
  actions: {
  }
})
