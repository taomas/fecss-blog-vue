import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const API_ROOT = 'http://localhost:3000/'

const articleResource = Vue.resource(API_ROOT + 'articles{/id}')
export default {
  getArticleDetail (id) {
    return articleResource.get({id: id})
  },
  getArticleList () {
    return articleResource.get()
  }
}
