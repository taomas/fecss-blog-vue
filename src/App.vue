<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import sideLeft from './components/sideLeft.vue'
import posts from './components/posts.vue'
import sidebar from './components/sidebar.vue'

export default {
  data () {
    return {
      layoutStatus: 0
    }
  },
  beforeCompile () {
    const path = window.location.href
    this.$router.beforeEach(() => {
      if (path.indexOf('write') !== -1) {
        this.layoutStatus = 1
      } else {
        this.layoutStatus = 0
      }
      console.log(window.location.href)
    })
  },
  components: {
    'side-left': sideLeft,
    'posts': posts,
    'sidebar': sidebar
  }
}
</script>

<style>
@import './assets/css/index';
@import './assets/css/ionicicon';

html, body {
  box-sizing: border-box;
  background: #f5f5f5;
}

.home-container {
  position: relative;
  width: 1120px;
  padding: 80px 0 30px;
  margin: 0 auto;
}
</style>
