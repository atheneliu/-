
const UPDATE_ENTER_TYPE = 'app/update-enter-type'
export const ENTER_TYPE_PUSH = 'enter-type-push'
export const ENTER_TYPE_POP = 'enter-type-pop'
export const ENTER_TYPE_REPLACE = 'enter-type-replace'

const ENTER_ANITION_MAP = {
  [ENTER_TYPE_PUSH]: {
    enter: 'animated fadeInRight',
    leave: 'animated fadeOutLeft',
  },
  [ENTER_TYPE_POP]: {
    enter: 'animated fadeInLeft',
    leave: 'animated fadeOutRight',
  },
  [ENTER_TYPE_REPLACE]: {
    enter: 'animated fadeIn',
    leave: 'animated fadeOut',
  },
}

const app = {
  state: {
    enterType: ENTER_TYPE_PUSH,
  },
  mutations: {
    [UPDATE_ENTER_TYPE](state, { enterType }) {
      state.enterType = enterType
    },
  },
  actions: {
    updateEnterType({ commit }, { enterType }) {
      commit(UPDATE_ENTER_TYPE, { enterType })
    },
  },
  getters: {
    enterClass: state => ENTER_ANITION_MAP[state.enterType].enter,
    leaveClass: state => ENTER_ANITION_MAP[state.enterType].leave,
  },
}

export default app
