import Vue from 'vue'
import Vuex from 'vuex'
import articleDetail from './modules/articleDetail'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    articleDetail
  }
})
