<template>
  <div class="write-container">
    <admin-header></admin-header>
    <input class="write-head-title" type="text" name="title" placeholder="请输入标题"
      v-model="title">
    <input class="write-head-subtitle" type="text" name="name" name="subtitle" value="" placeholder="标签"
      v-model="subTitle">
    <div class="write-content rd-row-flex">
      <div class="write-panel">
        <textarea class="write-panel-textarea"
          v-model="article"
          debounce="300"
          ></textarea>
      </div>
      <div class="write-preview markdown-body" v-html="markedArticle">
      </div>
    </div>
  </div>
</template>

<script>
import highlight from 'highlight.js'
import marked from 'marked'
import adminHeader from './common/adminHeader'
export default {
  data () {
    return {
      title: '',
      subTitle: '',
      article: ''
    }
  },
  computed: {
    markedArticle () {
      const renderer = new marked.Renderer()
      // renderer.heading = function (text, level) {
      //   var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-')
      //   return `<h${level}><a name="${escapedText}" class="anchor" href="#${escapedText}">
      //           <span class="header-link"></span>
      //           </a>${text}</h${level}>`
      // }
      // renderer.code = function (code, language) {
      //   return '<pre class="code code-' + language + '">' + code + '</pre>'
      // }
      return marked(this.article, { renderer: renderer })
    }
  },
  watch: {
    markedArticle () {
      $('pre code').each(function (i, block) {
        highlight.highlightBlock(block)
      })
    }
  },
  ready () {
  },
  components: {
    'admin-header': adminHeader
  }
}
</script>

<style scoped>
@import '../assets/css/marked.css';
.write-container {
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
}

input {
  display: block;
  box-sizing: border-box;
  padding-left: 15px;
  outline: none;
  border-radius: 2px;
  border: 1px solid #ccc;
}

.write-head-title {
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
}

.write-head-subtitle {
  width: 100%;
  height: 35px;
  margin-bottom: 30px;
}

.write-content {
  box-sizing: border-box;
  width: 100%;
  height: 500px;
  border: 1px solid #ccc;
  .write-panel {
    position: relative;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    border-right: 1px solid #ccc;
  }
  .write-preview {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 10px;
    font-size: 14px;
    color: #333;
    overflow-y: scroll;
  }
}

.write-panel-textarea {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  line-height: 21px;
  margin: 0;
  padding: 10px;
  color: #555;
  font-size: 14px;
  resize: none;
  outline: none;
  border: 0;
  z-index: 99;
}
</style>
