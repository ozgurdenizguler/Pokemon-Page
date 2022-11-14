<template>
    <div>
      <h1 class="overview-favorite-pokemon__title">
        Detail Page
      </h1>
      
      <button class="nes-btn" @click="$router.push('/') ,'eraseDetails'">
      Go Back
      </button>
    
      <div class="overview-favorite-pokemon">
        <pokemon-card
          v-for="(pokemon, index) in stateDetailPokemonList"
          :key="index"
          :pokemon-name="pokemon"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  import PokemonCard from '@/components/PokemonCard'
      export default {
          components: {
              PokemonCard
          },
          computed: {
              ...mapState([
              'stateDetailPokemonList'
              ])
          },
          methods: {
            eraseDetails(){
                this.$emit('detailErase');
                
            }
          },
      }
  </script>
  
  <style scoped>
    .pokemon-card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
  }
  .overview-favorite-pokemon {
      display: grid;
   
  }
  .overview-favorite-pokemon__title {
    margin-top: 10px;
    text-align: center;
  }
  </style>