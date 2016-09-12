import {
  GET_ARTICLE_DETAIL
} from '../mutation-types'

const state = {
  articleDetail: {}
}

const mutations = {
  [GET_ARTICLE_DETAIL] (state, articleDetail) {
    state.articleDetail = articleDetail
  }
}

export default {
  state,
  mutations
}
