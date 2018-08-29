<template>
  <div class="game">
    <h1>Hello from Game</h1>

    <div class="game-config">
      <div class="opponent-cards">{{opponent.name}}</div>
      <div v-if="opponent.name && myCard.name">
        <button @click="startGame">start</button>
      </div>
<opponents />
<myCards />
    </div>
  </div>
</template>

<script>
import MyCards from "@/components/MyCards";
import Opponent from "@/components/Opponents"
export default {
  name: 'Game', 
  
  computed:{
    game() {
      return this.$store.state.game
    }
  },
methods:{

  startGame() {
    let gameConfig ={
      myCard: this.myCard,
      opponent: this.opponent
    }
      this.$store.dispatch('startGame',gameConfig);
    },
    components: {
      MyCards,
      Opponents
    }
  }}

 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
