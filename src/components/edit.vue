<template>
  <div class="write-container">
    <admin-nav>
      <li class="write-btn-confirm"
        @click="evtEditArticle">修改</li>
    </admin-nav>
    <h3 class="edit-title">{{articleDetail.title}}</h3>
    <div class="edit-sub-title">
      <span>{{articleDetail.createTime}}</span>
      <span>{{articleDetail.tags}}</span>
    </div>
    <div class="write-content rd-row-flex">
      <div class="write-panel">
        <textarea class="write-panel-textarea"
          v-model="articleDetail.sourceContent"
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
import { createArticle, getArticleDetail, updateArticle } from '../vuex/actions'
import adminNav from './common/adminNav'
export default {
  data () {
    return {
    }
  },
  computed: {
    markedArticle () {
      let renderer = new marked.Renderer()
      let content = this.articleDetail.sourceContent || ''
      return marked(content, { renderer: renderer })
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
    evtEditArticle () {
      const opts = {
        articleId: this.$route.params.id,
        articleDetail: this.articleDetail
      }
      console.log(opts)
      this.updateArticle(opts)
    },
    getEditArticle () {
      const articleId = this.$route.params.id
      this.getArticleDetail(articleId)
    }
  },
  ready () {
    this.getEditArticle()
  },
  vuex: {
    getters: {
      articleDetail: state => state.articleDetail,
      editArticle: state => state.editArticle,
      modelMessage: state => state.modelMessage
    },
    actions: {
      createArticle,
      getArticleDetail,
      updateArticle
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
