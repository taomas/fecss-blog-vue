import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/atom-one-light.css'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routers from './routers.js'

Vue.use(VueRouter)
console.log('app')

const router = new VueRouter()
routers(router)

router.start(App, 'app')
