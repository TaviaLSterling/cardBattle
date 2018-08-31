<template>
  <div class="player container">
      <div class="player" v-for="card in player.hand" :key="card.id">
        {{player.name}}
         <p>{{card.name}}<br>{{card.attack}}<br>{{card.health}}<br>{{card.defense}}</p>
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