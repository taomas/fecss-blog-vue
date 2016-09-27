import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/atom-one-light.css'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './routers.js'
import modal from './plugin/modal.js'

Vue.use(VueRouter)

Vue.mixin({
  created: function () {
    modal(Vue, this.$root)
  }
})

const router = new VueRouter()
routers(router)

router.start(App, 'app')
