import Vue from 'vue'
import VueResource from 'vue-resource'
import cookies from 'js-cookie'

Vue.use(VueResource)
const API_ROOT = 'http://localhost:3000/'
const articleResource = Vue.resource(API_ROOT + 'articles{/id}')
const usersResource = Vue.resource(API_ROOT + 'users{/id}')

Vue.http.interceptors.push((request, next) => {
  const token = cookies.get('token')
  request.headers.token = token
  console.log(request.headers)
  // continue to next interceptor
  next((response) => {
    if (response.status === 401) {
      window.location.pathname = '/login'
    }
  })
})

export default {
  getArticleDetail (id) {
    return articleResource.get({id: id})
  },
  getArticleList (opts) {
    return articleResource.get({id: '', ...opts})
  },
  createArticle (opts) {
    return articleResource.save({id: 'create'}, opts)
  },
  removeArticleById (opts) {
    return articleResource.save({id: 'delete'}, opts)
  },
  userLogin (opts) {
    return usersResource.save({id: 'login'}, opts)
  },
  userRegister (opts) {
    return usersResource.save({id: 'register'}, opts)
  }
}
