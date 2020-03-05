import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations: {
    change (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  },
  actions: {
    changeCity ({commit}, city) {
      commit('change', city)
    }
  }
})

export default store
