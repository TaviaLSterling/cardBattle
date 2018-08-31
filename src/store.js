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
    opponentCard: {},
    games: [],
    game: {},
    playerCard: {},
    attackObject: {}
  },
  mutations: {
    startGame(state, data) {
      state.activeGame = data
    },
    setPlayerCard(state, data) {
      state.playerCard = data
    },
    setAttack(state, data) {
      state.attackObject = data
      //  router.push({name: 'activeGame', params:{gameId: data.id}})  

    },
    setOpponentCard(state, data) {
      state.opponentCard = data
    }
 //  setActiveGame(state,data){
 //     state.activeGame = data
 //  }
  },
  actions: {
    newGame({ commit, dispatch }, data) {
      cardApi.post('', data)
        .then(res => {

          commit('startGame', res.data)
          router.push({ name: 'game' })

        })
    },
    getGame({ commit, dispatch }, gameId) {
      cardApi.get('/' + gameId).then(res => {
        commit('startGame', res.data.id)
        router.push({ name: 'game' })
      })
    },
    setGame({ commit, dispatch }) {
      cardApi.get('')
        .then(res => {
          commit('setCards', res.data)
        })
    },
    attack({ commit, dispatch }, attackObject) {
      cardApi.put('/' + attackObject.gameId, attackObject)
        .then(res => {
          dispatch('getGame', attackObject.gameId)
        })
    }
  }
})
