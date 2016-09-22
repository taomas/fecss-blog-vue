<template>
  <div class="write-container">
    <admin-nav>
      <li class="write-btn-confirm"
        @click="evtCreateArticle">发布</li>
    </admin-nav>
    <input class="write-head-title" type="text" name="title" placeholder="请输入标题"
      v-model="title">
    <input class="write-head-tags" type="text" name="name" name="tags" value="" placeholder="标签"
      v-model="tags">
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
import { createArticle, showErrorMessage } from '../vuex/actions'
import adminNav from './common/adminNav'
export default {
  data () {
    return {
      title: '',
      tags: '',
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
  filters: {
    trim (value) {
      return value.replace(/' '/g, '')
    }
  },
  watch: {
    markedArticle () {
      $('pre code').each(function (i, block) {
        highlight.highlightBlock(block)
      })
    },
    modelMessage (newVal, oldVal) {
      if (newVal) {
        this.$Modal.create('提示', newVal, () => {
          this.$router.go({name: 'admin'})
        })
      }
    }
  },
  methods: {
    verifyInfo () {
      if (this.title === '') {
        return '请输入标题！'
      }

      if (this.tags === '') {
        return '请输入标签！'
      }

      if (this.article.length < 30) {
        return '文章内容不能少于30字' + this.article.length
      }
      return false
    },
    evtCreateArticle () {
      const message = this.verifyInfo()
      if (message) {
        return this.showErrorMessage(message)
      }
      const opts = {
        tags: this.tags,
        title: this.title,
        sourceContent: this.article,
        content: this.markedArticle
      }
      this.createArticle(opts)
    }
  },
  created () {
  },
  vuex: {
    getters: {
      editArticle: state => state.editArticle,
      modelMessage: state => state.modelMessage
    },
    actions: {
      createArticle,
      showErrorMessage
    }
  },
  components: {
    'admin-nav': adminNav
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

.write-head-tags {
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

.write-btn-confirm {
  float: right;
  width: 80px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  border-left: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  &:hover {
    background: #5b6064;
    color: #f5f5f5;
  }
}
</style>
