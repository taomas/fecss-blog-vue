<template>
  <div class="write-container">
    <admin-nav>
      <li class="write-btn-confirm"
        @click="evtEditArticle">修改</li>
    </admin-nav>
    <editor v-ref:editor></editor>
  </div>
</template>

<script>
import { createArticle, getArticleDetail, editArticle } from '../vuex/actions'
import adminNav from './common/adminNav'
import editor from './common/editor'
export default {
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.$refs.editor.title
    },
    tags () {
      return this.$refs.editor.tags
    },
    sourceArticle () {
      return this.$refs.editor.sourceArticle
    },
    markedArticle () {
      return this.$refs.editor.markedArticle
    }
  },
  watch: {
    articleDetail (newVal, oldVal) {
      if (newVal) {
        this.$refs.editor.title = newVal.title
        this.$refs.editor.tags = newVal.tags
        this.$refs.editor.sourceArticle = newVal.sourceArticle
      }
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
        articleDetail: {
          title: this.title,
          tags: this.tags,
          sourceArticle: this.sourceArticle,
          markedArticle: this.markedArticle
        }
      }
      this.editArticle(opts)
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
      modelMessage: state => state.modelMessage
    },
    actions: {
      createArticle,
      getArticleDetail,
      editArticle
    }
  },
  components: {
    'admin-nav': adminNav,
    'editor': editor
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
