import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

const LOCAL_STORAGE_PKM_NAMES = 'favoritePokemonNames'

const store = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'pokedex'
    })],
    state: {
        statePokemonDataList: [],
        stateFavoritePokemonList: [],
        stateDetailPokemonList: [],

    },
    actions: {
        setPokemonData(context, payload) {
            context.commit('setPokemonData', payload)
        },
        setFavoritePokemonList(context, payload) {
            context.commit('setFavoritePokemonList', payload)
        },
        setDetailPokemonList(context, payload) {
            context.commit('setDetailPokemonList', payload)
        },
        addFavorite(context, payload) {
            context.commit('addFavorite', payload)
        },
        addDetail(context, payload) {
            context.commit('addDetail', payload)
        },
        eraseDetailPokemonList(context, payload) {
            context.commit('eraseDetailPokemonList', payload)
        },
        deleteFavorite(context, payload) {
            context.commit('deleteFavorite', payload)
        },
        eraseFavoritePokemonList(context) {
            context.commit('eraseFavoritePokemonList')
        },
        detailErase(context) {
            context.commit('detailErase')
        },
    },
    mutations: {
        setPokemonData(state, list) {
            state.statePokemonDataList = list
        },
        setFavoritePokemonList(state, list) {
            state.stateFavoritePokemonList = list
        },
        addFavorite(state, name) {
            state.stateFavoritePokemonList.push(name)
        },
        deleteFavorite(state, item) {
            state.stateFavoritePokemonList.splice(item, 1)
        },
        eraseFavoritePokemonList(state) {
            state.stateFavoritePokemonList = []
        },
       setDetailPokemonList (state, list) {
            state.stateDetailPokemonList = list
        },
        addDetail(state, name) {
            state.stateDetailPokemonList.push(name)
        },
        eraseDetailPokemonList(state, item) {
            state.stateDetailPokemonList.splice(item, 1)
        },
        detailErase(state) {
            state.stateFavoritePokemonList = []
        },
    },
})

export default store