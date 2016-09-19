import Vue from 'vue'
import Vuex from 'vuex'
import {
  GET_ARTICLE_DETAIL,
  GET_ARTICLE_LIST,
  GET_ADMIN_ARTICLES,
  SHOW_MESSAGE,
  SHOW_ERROR_MESSAGE,
  GET_NEW_ARTICLES,
  SAVE_TOKEN
} from './mutation-types'

Vue.use(Vuex)

const state = {
  articleDetail: {},
  articleList: [],
  newArticles: [],
  modelMessage: '',
  errorMessage: '',
  startIndex: 0,
  maxIndex: 0,
  token: '',
  adminArticles: []
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
  [GET_NEW_ARTICLES] (state, articleList) {
    state.newArticles = articleList.articles
  },
  [SAVE_TOKEN] (state, token) {
    state.token = token
  },
  [GET_ADMIN_ARTICLES] (state, adminArticles) {
    state.adminArticles = adminArticles.articles
    state.maxIndex = adminArticles.maxIndex
  }
}

export default new Vuex.Store({
  state,
  mutations
})
