import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cardNum: '',
        cardHolder: 'Vladimir Putin'
    },
    getters: {
        getCardNum(state) {
            return state.cardNum
        },
        getCardHolder(state) {
            return state.cardHolder
        }
    },
    mutations: {
        changeCardNum(state, newNum) {
            state.cardNum = newNum
        }
    }
})