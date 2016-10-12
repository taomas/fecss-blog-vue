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
@import './assets/css/marked';

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

.markdown-body {
  h1, h2, h3, h4, strong {
    font-weight: 600;
    color: #2c3e50;
  }
  img {
    max-width: 100%;
    border-radius: 2px;
  }
  a {
    color: #42b983;
    font-weight: 600;
  }
  code, pre {
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 0.8em;
    background-color: #f8f8f8;
    -webkit-font-smoothing: initial;
  }
  pre {
    box-shadow: 0 0 2px #ccc;
  }
  code {
    position: relative;
    padding: 1em;
    &:after {
      content: attr(data-language);
      position: absolute;
      top: 0;
      right: 0;
      color: #ccc;
      text-align: right;
      font-size: 0.75em;
      padding: 5px 10px 0;
      line-height: 15px;
      height: 15px;
      font-weight: 600;
    }
  }
  blockquote {
    margin: 2em 0;
    padding-left: 20px;
    border-left: 4px solid #42b983;
  }
  ul,
  ol {
    display: block;
    list-style-type: disc;
    padding-left: 1.5em;
  }
}
</style>
