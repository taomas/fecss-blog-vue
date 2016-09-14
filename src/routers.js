import home from './components/home.vue'
import page from './components/page.vue'
import write from './components/write.vue'
import admin from './components/admin.vue'
import login from './components/login.vue'

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
    },
    '/login': {
      component: login,
      name: 'login'
    }
  })

  router.redirect({
    '*': '/'
  })
}
