import Vue from 'vue'
import Vuex from 'vuex'
import {
  GET_ARTICLE_DETAIL,
  GET_ARTICLE_LIST,
  SHOW_MESSAGE,
  SHOW_ERROR_MESSAGE,
  UPDATE_START_INDEX,
  GET_NEW_ARTICLES
} from './mutation-types'

Vue.use(Vuex)

const state = {
  articleDetail: {},
  articleList: [],
  newArticles: [],
  modelMessage: '',
  errorMessage: '',
  startIndex: 0,
  maxIndex: 0
}

const mutations = {
  [GET_ARTICLE_DETAIL] (state, articleDetail) {
    state.articleDetail = articleDetail
  },
  [GET_ARTICLE_LIST] (state, articleList) {
    state.articleList = articleList.articles
    state.maxIndex = articleList.maxIndex
  },
  [SHOW_MESSAGE] (state, message) {
    state.modelMessage = message
  },
  [SHOW_ERROR_MESSAGE] (state, message) {
    state.errorMessage = message
  },
  [UPDATE_START_INDEX] (state, startIndex) {
    state.startIndex = startIndex
  },
  [GET_NEW_ARTICLES] (state, articleList) {
    state.newArticles = articleList.articles
  }
}

export default new Vuex.Store({
  state,
  mutations
})
