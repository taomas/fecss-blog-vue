import api from '../api'
import * as types from './mutation-types'

export const getArticleDetail = ({dispatch}, opts) => {
  api.getArticleDetail(opts).then(function (res) {
    dispatch(types.GET_ARTICLE_DETAIL, res.body)
  })
}

export const getArticleList = ({dispatch}) => {
  api.getArticleList().then(function (res) {
    dispatch(types.GET_ARTICLE_LIST, res.body)
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
