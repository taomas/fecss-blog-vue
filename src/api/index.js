import Vue from 'vue'
import VueResource from 'vue-resource'
import cookies from 'js-cookie'
import store from '../vuex/store'

Vue.use(VueResource)
// const API_ROOT = 'http://23.88.229.24:3000/'
const API_ROOT = 'http://127.0.0.1:3000/'
const articleResource = Vue.resource(API_ROOT + 'articles{/id}{/controller}')
const usersResource = Vue.resource(API_ROOT + 'users{/id}')
const adminResource = Vue.resource(API_ROOT + 'admin{/id}')

Vue.http.interceptors.push((request, next) => {
  Vue.http.headers.common['token'] = cookies.get('token') || ''
  store.state.showLoading = true
  next((response) => {
    store.state.showLoading = false
    if (response.status === 401) {
      window.location.hash = '#!/login'
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
  getArchiveArticles () {
    return articleResource.get({id: 'archive'})
  },
  getTagsList (opts) {
    return articleResource.get({id: 'tags', ...opts})
  },
  getTagsContent (tags) {
    return articleResource.get({id: 'tags', 'controller': tags})
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
  editArticle (opts) {
    return adminResource.save({id: 'edit'}, opts)
  }
}
