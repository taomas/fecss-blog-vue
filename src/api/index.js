import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  getArticleDetail () {
    return Vue.http.get('http://localhost:3000/topic')
  }
}
