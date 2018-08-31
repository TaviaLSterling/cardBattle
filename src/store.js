import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let cardApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
  activeGame: {},
 
  games: [],
  game: {}
  },
  mutations: {
startGame(state,data) {
  state.activeGame = data
},
setCards(state,data) {
state.games = data
},
setGame(state, data) {
  state.game = data
//  router.push({name: 'activeGame', params:{gameId: data.id}})
}
  },
  actions: {
    newGame({commit, dispatch},data) {
      cardApi.post('',data)
      .then(res => {
        console.log(res.data)
        commit('startGame', res.data)
        router.push({name: 'game'})
        
      })
    },
    getGame({commit,dispatch}, gameId){
      cardApi.get('/' + gameId).then(res => {
        commit('setGame', res.data.id)
     router.push({name:'game'})
    })
 },
 setGames({commit,dispatch}) {
   cardApi.get('')
   .then(res => {
     commit('setCards', res.data)
   })
 }
 }
})
