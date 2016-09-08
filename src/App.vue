<template>
  <div id="app">
    <div class="home-container rd-row-flex">
      <side-left></side-left>
      <router-view></router-view>
      <sidebar></sidebar>
    </div>
  </div>
</template>

<script>
import sideLeft from './components/sideLeft.vue'
import posts from './components/posts.vue'
import sidebar from './components/sidebar.vue'

export default {
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
