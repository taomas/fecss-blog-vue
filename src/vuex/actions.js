import api from '../api'
import * as types from './mutation-types'

export const getArticleDetail = ({dispatch}, opts) => {
  api.getArticleDetail(opts).then(function (res) {
    dispatch(types.GET_ARTICLE_DETAIL, res.body)
  })
}

export const getArticleList = ({dispatch}, opts) => {
  const startIndex = opts.start || 0
  dispatch(types.UPDATE_START_INDEX, startIndex)
  api.getArticleList(opts).then(function (res) {
    dispatch(types.GET_ARTICLE_LIST, res.body)
  })
}

export const getNewArticles = ({dispatch}) => {
  api.getArticleList({
    start: 0,
    limit: 5
  }).then(function (res) {
    dispatch(types.GET_NEW_ARTICLES, res.body)
  })
}

export const createArticle = ({dispatch}, opts) => {
  return api.createArticle(opts).then(function (res) {
    dispatch(types.SHOW_MESSAGE, res.body)
  })
}

export const removeArticleById = ({dispatch}, opts) => {
  return api.removeArticleById(opts).then(function (res) {
    console.log(res)
  })
}

export const distoryModelMessage = ({dispatch}) => {
  dispatch(types.SHOW_MESSAGE, '')
}

export const userLogin = ({dispatch}, opts) => {
  return api.userLogin(opts).then(function (res) {
    if (res.body.status === 1) {
      dispatch(types.SHOW_MESSAGE, res.body.message)
    } else {
      dispatch(types.SHOW_ERROR_MESSAGE, res.body.message)
    }
    console.log(res.body)
  })
}

export const userRegister = ({dispatch}, opts) => {
  return api.userRegister(opts).then(function (res) {
    console.log(res)
  })
}
