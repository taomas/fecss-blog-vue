<template>
  <div class="home-container rd-row-flex">
    <side-left></side-left>
    <router-view></router-view>
    <sidebar></sidebar>
  </div>
</template>

<script>
import sideLeft from './sideLeft.vue'
import posts from './posts.vue'
import sidebar from './sidebar.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    'side-left': sideLeft,
    'posts': posts,
    'sidebar': sidebar
  }
}
</script>

<style scoped>
.home-container {
  position: relative;
  width: 1120px;
  padding: 80px 0 30px;
  margin: 0 auto;
}
</style>
