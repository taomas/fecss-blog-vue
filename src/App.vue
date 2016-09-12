<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import sideLeft from './components/sideLeft.vue'
import posts from './components/posts.vue'
import sidebar from './components/sidebar.vue'
import store from './vuex/store'

export default {
  data () {
    return {
    }
  },
  components: {
    'side-left': sideLeft,
    'posts': posts,
    'sidebar': sidebar
  },
  store
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
