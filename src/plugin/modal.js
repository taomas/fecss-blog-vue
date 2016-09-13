import modal from '../components/common/modal.vue'

export default (Vue, $root) => {
  Vue.set($root, 'RADON_MODAL', {
    show: false,
    title: '',
    content: '',
    cancel: () => {},
    confirm: () => {}
  })

  Vue.component('modal', modal)

  Vue.prototype.$Modal = {
    create (title, text, confirm, cancel) {
      $root.RADON_MODAL = {
        show: true,
        title: title,
        content: text,
        confirm: confirm,
        cancel: cancel
      }
    },
    clear () {
      $root.RADON_MODAL = {
        show: false,
        title: '',
        content: '',
        cancel: () => {},
        confirm: () => {}
      }
    }
  }
}
