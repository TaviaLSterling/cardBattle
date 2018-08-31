import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import Home from './views/Home.vue'
//@ts-ignore
import Game from './views/Game.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/game',
      name: 'game',
      component: Game
    }

    
  ]
})
