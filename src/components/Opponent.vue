<template>
<div class="opponent container">
    <h1> {{opponent.name}}</h1>
   <div v-for="card in opponent.hand" :key="card.id">
       <div v-if="card.visible">
        <img :src="card.img">
        <h4>{{card.name}}</h4><br>
        <h4>Attack:
        {{card.attack}}</h4>
        <h4>Health:
        {{card.health}}</h4>
        <h4>Defense:
        {{card.defense}}</h4>
       </div>
       <div v-if="!card.visible">
           <img class="resize" src="../assets/cardBack.png">
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
<style>
.resize {
    height:230px;
    width:100px;
}
</style>