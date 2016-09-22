import home from './components/home.vue'
import page from './components/page.vue'
import edit from './components/edit.vue'
import write from './components/write.vue'
import admin from './components/admin.vue'
import login from './components/login.vue'
import posts from './components/common/posts.vue'
import archive from './components/common/archive.vue'
import tags from './components/common/tags.vue'
import tagsContent from './components/common/tagsContent.vue'

export default function (router) {
  router.map({
    '/': {
      component: home,
      name: 'home',
      subRoutes: {
        '/': {
          component: posts,
          name: 'posts'
        },
        'archive': {
          component: archive,
          name: 'archive'
        },
        'tags': {
          component: tags,
          name: 'tags'
        },
        'tags/:id': {
          component: tagsContent,
          name: 'tagsContent'
        }
      }
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
