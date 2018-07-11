import { INCREMENT, DECREMENT } from './constants'

const limit = 5
const delay = ms => new Promise(resovle => setTimeout(resovle, ms))
const counter = {
  state: {
    count: 0,
    history: [],
  },
  mutations: {
    [INCREMENT]: (state) => {
      state.count += 1
      state.history.push('increment')
    },
    [DECREMENT]: (state) => {
      state.count -= 1
      state.history.push('decrement')
    },
  },
  actions: {
    increment: ({ commit }) => {
      commit(INCREMENT)
    },
    decrement: ({ commit }) => {
      commit(DECREMENT)
    },
    incrementIfOdd: ({ commit, state }) => {
      if ((state.count + 1) % 2 === 0) {
        commit(INCREMENT)
      }
    },
    incrementAsync: async ({ commit }) => {
      await delay(1000)
      commit(INCREMENT)
    },
  },
  getters: {
    count: state => state.count,
    recentHistory: (state) => {
      const end = state.history.length
      const begin = end - limit < 0 ? 0 : end - limit
      return state.history
        .slice(begin, end)
        .toString()
        .replace(/,/g, ', ')
    },
  },
}

export default counter
