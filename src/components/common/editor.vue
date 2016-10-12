<template>
  <div class="editor-container">
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
          debounce="300"
          v-model="sourceArticle"></textarea>
        <div class="editor-preview markdown-body"
          v-html="markedArticle">
        </div>
      </div>
    </div>
    <editor-modal
      :modal-show="modalShow"
      :modal-title="modalTitle">
      </editor-modal>
  </div>
</template>

<script>
import Editor from '../../util/editor.js'
import highlight from 'highlight.js'
import marked from 'marked'
import editorModal from './editorModal'
export default {
  data () {
    return {
      title: '',
      tags: '',
      sourceArticle: '',
      menus: ['blod', 'italic', 'line', 'link', 'quote', 'code', 'image', 'line', 'heading', 'hr', 'line'],
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
      let renderer = new marked.Renderer()
      return marked(this.sourceArticle, { renderer: renderer })
    }
  },
  watch: {
    markedArticle () {
      window.setTimeout(() => {
        this.updateMarkedStyle()
      }, 0)
    }
  },
  events: {
    updateText (val) {
      this.sourceArticle = val
    }
  },
  methods: {
    updateMarkedStyle () {
      $('pre code').each(function (i, block) {
        highlight.highlightBlock(block)
      })
      $('.hljs').each(function (i, item) {
        let $this = $(item)
        let matchLang = $this.attr('class').match(/lang\-[a-z]+/)
        let language = matchLang ? matchLang[0].split('-')[1] : 'code'
        $this.attr('data-language', language)
      })
      $('a').attr('target', '_blank')
    },
    modelConfirm (linkAddress) {
      this.modalShow = false
      this.editor.toggleChange(this.insertType, linkAddress)
    },
    modelCancel (link) {
      this.modalShow = false
    },
    evtInsert (insertType) {
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
    }
  },
  ready () {
    this.editor = new Editor($('.editor-panel-textarea')[0], this)
  },
  components: {
    'editor-modal': editorModal
  }
}
</script>


<style scoped>
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
      background: url('../../assets/img/editor@2x.png');
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
  height: 600px;
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
    overflow: auto;
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
</style>
