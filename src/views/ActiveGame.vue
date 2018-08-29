<template>
<div class="active-game">
    {{activeGame}}
    </div>
    </template>

    <script>
    export default {
        mounted() {
            let gameId = this.$route.params.gameId;
            if(!this.activeGame.id) {
                this.$store.dispatch("getGame", gameId);
            }
        },
        computed: {
            activeGame() {
                return this.$store.state.game;
            }
        }
    };
    </script>