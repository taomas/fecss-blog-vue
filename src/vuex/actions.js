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
