<template>
  <div class="home container">
      <form v-on:submit.prevent="startGame">
      <h4>Enter your name:</h4>
      <input type="text" v-model="game.gameConfig.playerName" placeholder="name">
      </form>
    <form @submit.prevent="opponent">
      <h4>Number of Opponents:</h4>
      <input type="number" placeholder="1">
      </form>
         <form @submit.prevent="set">
      <h4>Choose a Deck:</h4>
      <input type="number" placeholder="1">
      <button @click="startGame">Start</button>
      </form>
    
     
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
.container {
  
  background-color:black;
  color:white;
  padding-top:70px;
  padding-bottom: 100px;
}
button{
  margin-left:20px;
}
</style>