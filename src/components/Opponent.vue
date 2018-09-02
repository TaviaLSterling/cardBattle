<template>
<div class="opponent container">
    <h3 class="nameColor"> {{opponent.name}}</h3>
   <div v-for="card in opponent.hand" @click="fnclick(opponent.id,card.id)" :key="card.id">
       <div v-if="card.visible"> 
           <h3 class="nameColor">{{card.name}}</h3>
        <img class="resize" :src="card.img">
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
        props: {
            //fnclick must be defined to work
      fnclick: {
        type: Function,
        required: true
        }
      },

    computed: {
        opponent() {
            return this.$store.state.activeGame.players[1];
        }
    }
}

</script>
<style>
.container {
    display:flex;
    justify-content:space-around
}
.resize {
    
    justify-content:space-around;
    padding:5px;
    height:230px;
    width:170px;
}
.nameColor {
    color:rgb(126, 9, 9);
}
</style>