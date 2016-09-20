import Vue from 'vue'
import Vuex from 'vuex'
import {
  GET_ARTICLE_DETAIL,
  GET_ARTICLE_LIST,
  GET_ADMIN_ARTICLES,
  SHOW_MESSAGE,
  SHOW_ERROR_MESSAGE,
  GET_NEW_ARTICLES,
  UPDATE_EDIT_ARTICLE
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
  adminArticles: [],
  editArticle: {}
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
  [GET_ADMIN_ARTICLES] (state, adminArticles) {
    state.adminArticles = adminArticles.articles
    state.maxIndex = adminArticles.maxIndex
  },
  [UPDATE_EDIT_ARTICLE] (state, editArticle) {
    state.editArticle = editArticle
  }
}

export default new Vuex.Store({
  state,
  mutations
})
