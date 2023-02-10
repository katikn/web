<template>
  <header>
    <router-link to="/">Главная</router-link> |
    <router-link to="/about">Обо мне</router-link> |
    <router-link to="/contacts">Контакты</router-link> |
    <router-link to="/minigame">Игра "Подземелье"</router-link> |
    <router-link to="/fightgame">Игра "Йоу"</router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import getData from './api'

export default {
  data(){
    return {
      data: {}
    }
  },
  beforeCreate(){
    getData().then((data) => {
      this.data = {
        ...data
      }
    })
  }
}
</script>