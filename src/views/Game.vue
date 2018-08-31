<template>
  <div class="game">
    <button @click="attack">Attack!</button>
    <player :fnclick="setPlayerCard"></player>
    <opponent :fnclick="setOpponentCard"></opponent>
    
      </div>
</template>

<script>
import Player from "../components/Player"
import Opponent from "../components/Opponent"

export default { 
  name: "game", 
  data() {   
    return {
attackObject : {
  playerId: "",
	playerCardId: "",
	opponentId: "",
  opponentCardId: "",
  gameId: ''
}
}
},
 
  computed:{
   activeGame() {
     return this.$store.state.activeGame;
   }
 },
 methods: {
   attack() {
     this.attackObject.gameId = this.activeGame.id
     this.$store.dispatch('attack',this.attackObject)
   },
   setPlayerCard(playerId, playerCardId) {
     this.attackObject.playerId = playerId
     this.attackObject.playerCardId = playerCardId
   },
   setOpponentCard(opponentId,opponentCardId) {
     this.attackObject.opponentId = opponentId
     this.attackObject.opponentCardId = opponentCardId
   }
 },
   components: {
     'player': Player,
    'opponent': Opponent
   }
 
 }
  



 // startGame() {
    // let gameConfig = {
    //   player: this.player,
    //   opponent: this.opponent
    // }
    //   this.$store.dispatch('startGame',gameConfig);
    // }
    // },

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.game {
  background-color:black;
  color:white;
}
</style>
