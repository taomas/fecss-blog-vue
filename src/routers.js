import home from './components/home.vue'
import page from './components/page.vue'
// import posts from './components/posts.vue'
// import article from './components/article.vue'
import write from './components/write.vue'
import admin from './components/admin.vue'

export default function (router) {
  router.map({
    '/': {
      component: home,
      name: 'home'
    },
    '/page/:id': {
      component: page,
      name: 'page'
    },
    '/write': {
      component: write,
      name: 'write'
    },
    '/admin': {
      component: admin,
      name: 'admin'
    }
  })
}
