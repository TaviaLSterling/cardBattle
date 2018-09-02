<template>

  <div class="player container">
    <h3 class="playerColor">{{player.name}}</h3>
    
      <div class="player" v-for="card in player.hand" @click="fnclick(player.id,card.id)" :key="card.id">
        
         <h4 class="playerColor">{{card.name}}</h4>
           <h4>Attack:{{card.attack}}</h4>
           <h4>Health:{{card.health}}</h4>
          <h4>Defense: {{card.defense}}</h4>

        <img class="resize" :src="card.img">
      </div>
  </div>
</template>

<script>
export default {
  name: "player",
  props: {
    fnclick: {
      type: Function,
      required: true
    }
  },

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
};
</script>
<style scoped>
.container {
  display: flex;
}
.resize {
  height: 230px;
  width: 170px;
}
.playerColor {
  color:rgb(24, 24, 143)
}
</style>