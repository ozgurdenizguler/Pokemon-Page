<template>
  <div class="pokemon-list">
    <h2>Choose your Pokémon</h2>
    <p
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.url"
      class="pokemon-list-item"
    >
      {{ index + 1 + '. ' }}
      <i
        v-if="favorites.includes(pokemon.name)"
        class="nes-icon is-small heart"
      />
      <i
        v-else
        class="nes-icon is-small heart is-empty"
      />
       {{ pokemon.name }}
       <img
        :key="pokemon.url"
        :src="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`
        "
        alt="Pokemon`"
      >
      <a
        v-show="!details.includes(pokemon.name) "
        class="nes-btn"
        :class="{ 'is-disabled': detailListLength > 0 }"
        @click="setDetails(pokemon.name), $router.push('details')"
        >Detail
      </a>
      <button
       v-show="details.includes(pokemon.name)"
        class="nes-btn is-error"
        @click="setDetails(pokemon.name)"
      >
        Close
      </button>
      <a
        v-show="!favorites.includes(pokemon.name)"
        class="nes-btn"
        :class="{ 'is-disabled': favoriteListLength === 10 }"
        @click="setFavorites(pokemon.name)"
      >Pick me!</a>
      <button
        v-show="favorites.includes(pokemon.name)"
        class="nes-btn is-error"
        @click="setFavorites(pokemon.name)"
      >
        Remove
      </button>
      
    </p>
  </div>
</template>

<script>
export default {
    name: 'PokemonList',
    props: {
        pokemonList: {
            type: Array,
            required: true,
        },
        favorites: {
            type: Array,
            required: true,
        },
        details: {
            type: Array,
            required: true,
        },
    },
    computed: {
        favoriteListLength() {
            return this.favorites.length
        },
        detailListLength() {
            return this.details.length
        },
    },
    methods: {
        setFavorites(name) {
            if (this.favorites.includes(name)) {
                const indexInArray = this.favorites.indexOf(name)
                this.$emit('deleteFavorite', indexInArray)
                return
            }
            if (this.favoriteListLength < 10) {
                this.$emit('addFavorite', name)
            }
        },
        setDetails(name) {
            if (this.details.includes(name)) {
                const indexInArray = this.details.indexOf(name)
                this.$emit('eraseDetailPokemonList', indexInArray)
                return
            }
            if (this.detailListLength < 1) {
                this.$emit('addDetail', name)
            }
        }},
}
</script>

<style scoped>
.pokemon-list {
    text-transform: capitalize;
}
.pokemon-list-item {
    display: flex;
    align-items: center;
}
</style>