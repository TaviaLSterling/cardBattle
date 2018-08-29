import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ActiveGame from './views/ActiveGame.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/activeGame',
      name:'activeGame',
      component: ActiveGame
    }

    
  ]
})
