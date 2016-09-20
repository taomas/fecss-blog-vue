import Vue from 'vue'
import VueResource from 'vue-resource'
import cookies from 'js-cookie'

Vue.use(VueResource)
const API_ROOT = 'http://localhost:3000/'
const articleResource = Vue.resource(API_ROOT + 'articles{/id}')
const usersResource = Vue.resource(API_ROOT + 'users{/id}')
const adminResource = Vue.resource(API_ROOT + 'admin{/id}')

Vue.http.interceptors.push((request, next) => {
  Vue.http.headers.common['token'] = cookies.get('token') || ''
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
  removeArticleById (opts) {
    return adminResource.save({id: 'delete'}, opts)
  },
  userLogin (opts) {
    return usersResource.save({id: 'login'}, opts)
  },
  userRegister (opts) {
    return usersResource.save({id: 'register'}, opts)
  },
  getAdminArticles (opts) {
    return adminResource.get({id: '', ...opts})
  },
  createArticle (opts) {
    return adminResource.save({id: 'create'}, opts)
  },
  updateArticle (opts) {
    return adminResource.save({id: 'edit'}, opts)
  }
}
