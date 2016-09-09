import home from './components/home.vue'
import posts from './components/posts.vue'
import article from './components/article.vue'
import write from './components/write.vue'

export default function (router) {
  router.map({
    '/home': {
      component: home,
      name: 'home',
      subRoutes: {
        '/': {
          component: posts,
          name: 'posts'
        },
        'article/:id': {
          component: article,
          name: 'article'
        }
      }
    },
    '/write': {
      component: write,
      name: 'write'
    }
  })
}
