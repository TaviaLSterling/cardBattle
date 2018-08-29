import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

let cardApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
enemy: [],
myCards: []
  },
  mutations: {
setEnemy(state,data) {
  state.enemy = data
}
  },
  actions: {
    startGame({commit, dispatch},something) {
      cardApi.post(something)
      .then(res => {
        commit('setMyCard', res.data)
      })
    }
  }
})
