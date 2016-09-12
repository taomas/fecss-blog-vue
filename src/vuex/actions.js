import api from '../api'
import * as types from './mutation-types'

export const getArticleDetail = ({dispatch}) => {
  api.getArticleDetail().then(function (res) {
    console.log(res.body)
    dispatch(types.GET_ARTICLE_DETAIL, res.body)
  })
}
