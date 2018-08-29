<template>
  <div class="my-cards">
      <div class="myCards" v-for="myCard in myCards" :key="myCard.id" @click="setMyCard(myCard)">
        {{myCards.name}}
      </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getMyCards");
  },
  computed: {
    myCards() {
      return this.$store.state.myCards;
    }
  },
  methods: {
    setMyCards(myCard) {
      this.$store.dispatch("setMyCards", myCard);
    }
  }
};
</script>