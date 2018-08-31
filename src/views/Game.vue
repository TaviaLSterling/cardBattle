<template>
  <div class="game">
    <player></player>
    <opponent></opponent>
      </div>
</template>

<script>
import Player from "../components/Player"
import Opponent from "../components/Opponent"

export default {
  name: "game", 
  computed:{
   activeGame() {
     return this.$store.state.activeGame
   }
 },
   components: {
     'player': Player,
    'opponent': Opponent
   }
 
 }
  

//methods:{

 // startGame() {
    // let gameConfig = {
    //   player: this.player,
    //   opponent: this.opponent
    // }
    //   this.$store.dispatch('startGame',gameConfig);
    // }
    // },

 
//}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
