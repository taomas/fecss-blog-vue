import {
  GET_ARTICLE_DETAIL
} from '../mutation-types'

const state = {
  detail: {}
}

const mutations = {
  [GET_ARTICLE_DETAIL] (state, detail) {
    state.detail = detail
  }
}

export default {
  state,
  mutations
}
