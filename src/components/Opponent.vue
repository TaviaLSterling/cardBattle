<template>
<div class="opponent container">
    <h1> {{opponent.name}}</h1>
   <div v-for="card in opponent.hand" :key="card.id">
       <div v-if="card.visible">
        <img :src="card.img">
        <p>{{card.name}}<br>{{card.attack}}{{card.health}}{{card.defense}}</p>
       </div>
       <div v-if="!card.visible">
           <img src="../assets/cardBack.png">
           </div>
        </div>
        </div>
</template>
<script>
export default {
       name: "opponent",

    computed: {
        opponent() {
            return this.$store.state.activeGame.players[1];
        }
    }
}

</script>