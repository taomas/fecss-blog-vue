<template>
  <div id="app">
    <router-view></router-view>
    <modal></modal>
  </div>
</template>

<script>
import modal from './components/common/modal.vue'
import store from './vuex/store'

export default {
  data () {
    return {
    }
  },
  components: {
    'modal': modal
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
  font-family: Lato, 'Microsoft Jhenghei', 'Helvetica Neue', Helvetica, STHeiTi, sans-serif;
}
</style>
