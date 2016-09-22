import Vue from 'vue'
import Vuex from 'vuex'
import {
  GET_ARTICLE_DETAIL,
  GET_ARTICLE_LIST,
  GET_ADMIN_ARTICLES,
  SHOW_MESSAGE,
  SHOW_ERROR_MESSAGE,
  GET_NEW_ARTICLES,
  UPDATE_EDIT_ARTICLE,
  GET_ARCHIVE_ARTICLES,
  GET_TAGS_LIST,
  GET_TAGS_CONTENT
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
  archiveArticles: [],
  tagsList: [],
  tagsContent: [],
  editArticle: {},
  showLoading: false
}

const mutations = {
  [GET_ARTICLE_DETAIL] (state, articleDetail) {
    state.articleDetail = articleDetail
  },
  [GET_ARTICLE_LIST] (state, articleList) {
    state.articleList = articleList.articles
    state.maxIndex = articleList.maxIndex
  },
  [GET_ARCHIVE_ARTICLES] (state, archiveArticles) {
    state.archiveArticles = archiveArticles
  },
  [GET_TAGS_LIST] (state, tagsList) {
    state.tagsList = tagsList
  },
  [GET_TAGS_CONTENT] (state, tagsContent) {
    state.tagsContent = tagsContent
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
