import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/atom-one-light.css'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './routers'

Vue.use(VueRouter)

const router = new VueRouter()
routers(router)

router.start(App, 'app')
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
