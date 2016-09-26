<template>
  <div id="app">
    <router-view></router-view>
    <modal></modal>
    <prograssbar></prograssbar>
    <!-- <fork></fork> -->
  </div>
</template>

<script>
import modal from './components/common/modal.vue'
import prograssbar from './components/common/prograssbar.vue'
import fork from './components/common/fork.vue'
import store from './vuex/store'

export default {
  data () {
    return {
    }
  },
  watch: {
    errorMessage (newVal, oldVal) {
      if (newVal) {
        this.$Modal.create('提示', newVal)
      }
    }
  },
  vuex: {
    getters: {
      errorMessage: state => state.errorMessage
    }
  },
  components: {
    'modal': modal,
    'prograssbar': prograssbar,
    'fork': fork
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
