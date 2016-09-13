import {
  SHOW_MESSAGE
} from '../mutation-types'

const state = {
  modelMessage: false
}

const mutations = {
  [SHOW_MESSAGE] (state, message) {
    state.modelMessage = message
  }
}

export default {
  state,
  mutations
}
