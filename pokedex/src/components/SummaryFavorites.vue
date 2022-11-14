<template>
    <div>
      <h2>Your chosen favorite Pokémon</h2>
      
      <template>
        <p
          v-for="(pokemonName, index) in favorites"
          :key="index"
          class="chosen-pokemon"
        >
          <img
            src="../assets/pokeball.png"
            alt="pokeball"
          >
          {{ pokemonName }}
        </p>
      </template>
      <p v-if="favoriteListLength > 1 && favoriteListLength < maximumList">
        You can add {{ maximumList - favoriteListLength }} more Pokémon
      </p>
      <p v-if="favoriteListLength > 9">
        Your list is full!
      </p>
      <p v-if="favoriteListLength > 9">
        Do you want to <button
          class="nes-btn is-error"
          @click="emptyFavoritePokemonList"
        >
          Delete
        </button> the list?
      </p>
      <router-link
        v-if="favoriteListLength > 0"
        class="nes-btn"
        to="/favorites"
      >
        View your favorite Pokémon
      </router-link>
    </div>
  </template>
  
  <script>
      export default {
          name: 'SummaryFavorites',
          props: {
            pokemonList: {
              type: Array,
              required: true
            },
            favorites: {
              type: Array,
              required: true
            }
          },
          data: function() {
              return {
                  maximumList: 10
              }
          },
          computed: {
              favoriteListLength() {
                  return this.favorites.length
              }
          },
          methods: {
            emptyFavoritePokemonList() {
              this.$emit('eraseFavoritePokemonList')
            }
          }
      }
  </script>
  
  <style scoped>
  .chosen-pokemon {
      text-transform: capitalize;
  }
  </style>