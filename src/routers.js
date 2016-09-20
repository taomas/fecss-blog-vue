import home from './components/home.vue'
import page from './components/page.vue'
import edit from './components/edit.vue'
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
    '/edit/:id': {
      component: edit,
      name: 'edit'
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
