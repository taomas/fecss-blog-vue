<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
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

</style>
