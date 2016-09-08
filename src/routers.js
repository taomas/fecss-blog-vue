// import home from './components/home.vue'
import posts from './components/posts.vue'

export default function (router) {
  router.map({
    '/': {
      component: posts
    },
    '/posts': {
      component: posts
    }
  })
}
