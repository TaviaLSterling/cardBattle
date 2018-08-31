<template>
  <div class="home container">
      <form v-on:submit.prevent="startGame">
      <p>Enter your name:</p>
      <input type="text" v-model="game.gameConfig.playerName" placeholder="name">
      </form>
    <form @submit.prevent="opponent">
      <p>Number of Opponents:</p>
      <input type="number" placeholder="1">
      </form>
         <form @submit.prevent="set">
      <p>Choose a Deck:</p>
      <input type="number" placeholder="1">
      </form>
    
     <button @click="startGame">Start</button>
        <!-- {{game.player}}
        {{game.opponent}} -->
        </div>
</template>

<script>
// @ is an alias to /src
// import Player from "@/components/Player.vue";
// import Opponent from "@/components/Opponent.vue";
import router from '../router.js'
export default {
  name: "home",
  data() {
    return {
      game: {
        gameConfig: {
          playerName: "",
          opponent: 1,
          set: 4
        }
      },
  //    computed: {
  //     gameAll() {
  //      return this.$store.state.games;
  //      }
  //    }
    };
  },
  methods: {
    startGame() {
      this.$store.dispatch("newGame", this.game);
    },
    startNewGame() {
    router.push({name:'game'})
    }
}
   
  // }, components: {
  //     Player,
  //     Opponent
  //   }
};
</script>
<style>
</style>