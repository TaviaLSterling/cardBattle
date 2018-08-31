<template>

  <div class="player container">
    <h4>{{player.name}}</h4>
      <div class="player" v-for="card in player.hand" :key="card.id">
        
         <h4>{{card.name}}</h4>
           <br><h4>Attack:{{card.attack}}</h4>
           <h4>Health:{{card.health}}</h4>
          <h4>Defense: {{card.defense}}</h4>
        <img :src="card.img">
      </div>
  </div>
</template>

<script>
export default {
    name:"player",

  // mounted() {
  //   this.$store.dispatch("");
  // },
 
  methods: {
    setCards(card) {
      this.$store.dispatch("setCards", card);
    }
  },
 computed: {
    player() {
      return this.$store.state.activeGame.players[0];
    }
  }
  }
</script>
<style>
.container{
  display:flex;
}
</style>