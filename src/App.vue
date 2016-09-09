<template>
  <div id="app">
    <template v-if="layoutStatus === 0">
      <div class="home-container rd-row-flex">
        <side-left></side-left>
        <router-view></router-view>
        <sidebar></sidebar>
      </div>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import sideLeft from './components/sideLeft.vue'
import posts from './components/posts.vue'
import sidebar from './components/sidebar.vue'
// import highlight from 'highlight.js'

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
  // ready () {
  //   console.log(highlight)
  //   window.setInterval(() => {
  //     $('pre code').each(function (i, block) {
  //       highlight.highlightBlock(block)
  //     })
  //   }, 500)
  // },
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
/*@import 'github-markdown-css/github-markdown.css';*/

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
