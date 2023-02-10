import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '@/views/HomePage.vue'
// import AboutPage from '@/views/AboutPage.vue'
// import ContactPage from '@/views/ContactPage.vue'
// import SecretPage from '@/views/SecretPage.vue'
/* eslint-disable */
// import BattleParam from '@/components/layouts/BattleParam.vue'
// import CharsParam from '@/components/layouts/CharsParam.vue'


import FightGame from '@/views/fightGame.vue'
import StartGame from '@/components/elements/startGame.vue'
import PathWay from '@/components/elements/pathWay.vue'
import Cave from '@/components/elements/goblinCave.vue'
import Boss from '@/components/elements/bossPlace.vue'

// import GoNorth from '@/components/layouts/GoNorth.vue'
// import GoNorth2 from '@/components/layouts/GoNorth2.vue'
// import GoSouth from '@/components/layouts/GoSouth.vue'
// import GoWest from '@/components/layouts/GoWest.vue'
// import GoWest2 from '@/components/layouts/GoWest2.vue'
// import GoEast from '@/components/layouts/GoEast.vue'
// import GoEast2 from '@/components/layouts/GoEast2.vue'
import MiniGame from '@/views/MiniGame.vue'
import roomSouth from '@/components/elements/roomSouth.vue'
import hallNorth from '@/components/elements/hallNorth.vue'
import hallSouth from '@/components/elements/hallSouth.vue'
import kitchenNorth from '@/components/elements/kitchenNorth.vue'
import balconyNorth from '@/components/elements/balconyNorth.vue'
import getPadawans from '@/components/elements/getPadawans.vue'


const routes = [
  {
    path: '/padawans',
    component: getPadawans
  },
  {
    path: '/path',
    component: PathWay
  },
  {
    path: '/fightGame',
    component: FightGame
  },
  {
    path: '/startGame',
    component: StartGame
  },
  {
    path: '/cave',
    component: Cave
  },
  {
    path: '/boss',
    component: Boss
  },
  {
    path: '/minigame',
    component: MiniGame
  },
  {
    path: '/balcony',
    component: balconyNorth
  },
  {
    path: '/roomSouth',
    name: 'room1',
    component: roomSouth
  },
  {
    path: '/kitchenNorth',
    name: 'kitchen',
    component: kitchenNorth
  },
  {
    path: '/hall',
    name: 'hall',
    children: [
      {
        path: 'north',
        component: hallNorth
      },
      {
        path: 'south',
        component: hallSouth
      },
    ]
  },
  // {
  //   path: '/',
  //   component: HomePage
  // },
  // {
  //   path: '/about',
  //   component: AboutPage
  // },
  // {
  //   path: '/contacts',
  //   component: ContactPage,
  //   children: [
  //     {
  //       path: 'chars',
  //       component: CharsParam
  //     },
  //     {
  //       path: 'battles',
  //       component: BattleParam
  //     },
  //   ]
  // },
  // {
  //   path: '/secret',
  //   name: 'secret',
  //   component: SecretPage
  // },
  // {
  //   path: '/minigame',
  //   component: MiniGame,
  //   children: [
  //     {
  //       path: 'north',
  //       component: GoNorth,
  //       children: [
  //         {
  //           path: 'north',
  //           component: GoNorth2
  //         },
  //         {
  //           path: 'west',
  //           component: GoWest2
  //         },
  //         {
  //           path: 'east',
  //           component: GoEast2
  //         }
  //       ]
  //     },
  //     {
  //       path: 'south',
  //       component: GoSouth
  //     },
  //     {
  //       path: 'west',
  //       component: GoWest
  //     },
  //     {
  //       path: 'east',
  //       component: GoEast
  //     },
  
      
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(''),
  routes
})

export default router