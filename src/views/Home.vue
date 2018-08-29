<template>
  <div class="home container">
      <form @submit.prevent="name">
      <p>Enter your name:</p>
      <input type="text" placeholder="name">
      </form>
    <form @submit.prevent="opponents">
      <p>Number of Opponents:</p>
      <input type="number" placeholder="1">
      </form>
      <p>Select Deck:</p>
      <button>Deck 1</button>
      <button>Deck 2</button>
      <button>Deck 3</button>
</div>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'
import MyCards from '@/components/MyCards.vue'
import Opponents from '@/components/Opponents.vue'


export default {
  name: 'home',
  data() {
    return {
activeGame: {}
    };
  },
  methods: {
startGame() {
  this.$store.dispatch('getGame',{gameId: this.activeGame})
},
setActiveGame(game) {
this.activeGame = game;
}
  },
  components: {
    Game,
    MyCards,
    Opponents
  }
}
</script>
