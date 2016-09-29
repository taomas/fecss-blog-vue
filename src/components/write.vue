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
    <div class="editor-content">
      <div class="editor-menu">
        <ul class="editor-menu-list menu-list-left">
          <template
            v-for="item in menus"
            track-by="$index">
              <li
                v-if="item === 'line'"
                class="verticle-line"></li>
              <li class="editor-menu-item"
                v-if="item !== 'line'">
                <i class="menu-icon menu-icon-{{item}}"
                  @click="evtInsert(item)"
                ></i>
              </li>
          </template>
        </ul>
        <ul class="editor-menu-list menu-list-right">
          <li class="verticle-line"></li>
          <li class="editor-menu-item">
            <i class="menu-icon menu-pull-right"
              @click="evtPullRight"
            ></i>
          </li>
          <li class="editor-menu-item">
            <i class="menu-icon menu-pull-center"
              @click="evtPullCenter"
            ></i>
          </li>
          <li class="editor-menu-item">
            <i class="menu-icon menu-pull-left"
              @click="evtPullLeft"
            ></i>
          </li>
        </ul>
      </div>
      <div class="editor-content-panel rd-row-flex"
        :class="pullStatus">
        <textarea class="editor-panel-textarea"
          v-model="article"
          debounce="300"
          ></textarea>
        <div class="editor-preview markdown-body" v-html="markedArticle">
        </div>
      </div>
    </div>
    <editor-modal
      :modal-show="modalShow"
      :modal-title="modalTitle"><editor-modal>
  </div>
</template>

<script>
import Editor from '../util/editor.js'
import highlight from 'highlight.js'
import marked from 'marked'
import { createArticle, showErrorMessage } from '../vuex/actions'
import adminNav from './common/adminNav'
import editorModal from './common/editorModal'

export default {
  data () {
    return {
      title: '',
      tags: '',
      article: '',
      menus: ['blod', 'italic', 'line', 'link', 'quote', 'code', 'image', 'line', 'olist', 'ulist', 'heading', 'hr', 'line'],
      selectText: '',
      pullStatus: 'pull-center',
      modalShow: false,
      modalTitle: '插入链接',
      insertType: '',
      editor: {}
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
    modelConfirm (link) {
      this.modalShow = false
      if (this.insertType === 'image') {
        this.editor.toggleImage(link)
      } else {
        this.editor.toggleLink(link)
      }
    },
    modelCancel (link) {
      this.modalShow = false
    },
    evtInsert (insertType) {
      this.editor = new Editor($('.editor-panel-textarea')[0])
      this.insertType = insertType
      if (insertType === 'image' || insertType === 'link') {
        this.modalTitle = insertType === 'image' ? '插入图片' : '插入链接'
        this.modalShow = true
      } else {
        this.editor.toggleChange(insertType)
      }
    },
    evtPullLeft () {
      this.pullStatus = 'pull-left'
    },
    evtPullRight () {
      this.pullStatus = 'pull-right'
    },
    evtPullCenter () {
      this.pullStatus = 'pull-center'
    },
    verifyInfo () {
      if ($.trim(this.title) === '') {
        return '请输入标题！'
      }

      if ($.trim(this.tags) === '') {
        return '请输入标签！'
      }

      if (this.tags.length > 5) {
        return '您输入的标签过长！请重新输入'
      }

      if ($.trim(this.article.length) < 30) {
        return '文章内容不能少于30字'
      }
      return false
    },
    evtCreateArticle () {
      const message = this.verifyInfo()
      if (message) {
        return this.$Modal.create('提示', message)
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
    'admin-nav': adminNav,
    'editor-modal': editorModal
  }
}
</script>

<style scoped>
@import '../assets/css/marked.css';
@import '../assets/css/baseicon.css';
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

.editor-content {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  border: 1px solid #ccc;
  .editor-menu {
    width: 100%;
    height: 30px;
    background: #fff;
    border-bottom: 1px solid #ccc;
    .editor-menu-list {

      padding: 0 5px;
      .editor-menu-item {
        box-sizing: border-box;
        width: 30px;
        height: 30px;
        padding: 5px;
        margin: 0 2px;
      }
      .verticle-line {
        width: 0;
        height: 20px;
        border-right: 1px solid #ddd;
        margin: 5px 4px;
      }
      &.menu-list-left {
        float: left;
        display: flex;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        width: 50%;
      }
      &.menu-list-right {
        float: right;
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
        align-items: center;
        width: 30%;
      }
    }
    .menu-icon {
      display: block;
      width: 20px;
      height: 20px;
      background: url('../assets/img/editor@2x.png');
      background-size: 380px 60px;
      cursor: pointer;
    }
    .menu-icon-blod {
      background-position: 0 0;
      &:hover {
        background-position: 0 -40px;
      }
    }
    .menu-icon-italic {
      background-position: -20px 0;
      &:hover {
        background-position: -20px -40px;
      }
    }
    .menu-icon-link {
      background-position: -40px 0;
      &:hover {
        background-position: -40px -40px;
      }
    }
    .menu-icon-quote {
      background-position: -60px 0;
      &:hover {
        background-position: -60px -40px;
      }
    }
    .menu-icon-code {
      background-position: -80px 0;
      &:hover {
        background-position: -80px -40px;
      }
    }
    .menu-icon-image {
      background-position: -100px 0;
      &:hover {
        background-position: -100px -40px;
      }
    }
    .menu-icon-olist {
      background-position: -120px 0;
      &:hover {
        background-position: -120px -40px;
      }
    }
    .menu-icon-ulist {
      background-position: -140px 0;
      &:hover {
        background-position: -140px -40px;
      }
    }
    .menu-icon-heading {
      background-position: -160px 0;
      &:hover {
        background-position: -160px -40px;
      }
    }
    .menu-icon-hr {
      background-position: -180px 0;
      &:hover {
        background-position: -180px -40px;
      }
    }
    .menu-pull-right {
      background-position: -320px 0;
      &:hover {
        background-position: -320px -40px;
      }
    }
    .menu-pull-center {
      background-position: -340px 0;
      &:hover {
        background-position: -340px -40px;
      }
    }
    .menu-pull-left {
      background-position: -360px 0;
      &:hover {
        background-position: -360px -40px;
      }
    }
  }
}

.editor-content-panel {
  box-sizing: border-box;
  width: 100%;
  height: 500px;
  .editor-panel {
    position: relative;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    border-right: 1px solid #ccc;
  }
  .editor-preview {
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    padding: 10px;
    font-size: 14px;
    color: #333;
    border-left: 1px solid #ddd;
    transition: all 0.3s ease;
  }
  .editor-panel-textarea {
    display: block;
    box-sizing: border-box;
    width: 50%;
    height: 100%;
    line-height: 21px;
    margin: 0;
    padding: 10px;
    color: #555;
    font-size: 14px;
    resize: none;
    outline: none;
    border: 0;
    transition: all 0.3s ease;
  }
  &.pull-left {
    .editor-panel-textarea {
      width: 0;
      padding: 0;
      opacity: 0;
    }
    .editor-preview {
      width: 100%;
      border-left: 0;
    }
  }
  &.pull-center {
    .editor-panel-textarea {
      width:50%;
    }
    .editor-preview {
      width: 50%;
    }
  }
  &.pull-right {
    .editor-panel-textarea {
      width: 100%;
    }
    .editor-preview {
      width: 0;
      padding: 0;
      border-left: 0;
      opacity: 0;
    }
  }
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
