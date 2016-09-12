import {
  GET_ARTICLE_LIST
} from '../mutation-types'

const state = {
  articleList: {}
}

const mutations = {
  [GET_ARTICLE_LIST] (state, articleList) {
    state.articleList = articleList
  }
}

export default {
  state,
  mutations
}
