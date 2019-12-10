import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}
const mutations = {
  increament(state) {
    state.count++
  },
  decreament(state) {
    state.count--
  }
}
const actions = {
  INCREAMENTIFODD({
    commit,
    state
  }) {
    if (state.count % 2 == 1) {
      commit('increament')
    }
  },
  INCREAMENTASYNC({
    commit
  }) {
    setTimeout(() => {
      commit('increament')
    }, 1000);
  }
}
const getters = {
  evenOrOdd(state) {
    return state.count % 2 == 1 ? '奇数' : '偶数'
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})