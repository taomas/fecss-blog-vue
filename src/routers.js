import home from './components/Home.vue'

export default function (router) {
  router.map({
    '/': {
      component: home
    }
  })
}
