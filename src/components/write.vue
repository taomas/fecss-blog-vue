<template>
  <div class="write-container">
    <admin-nav>
      <li class="write-btn-confirm"
        @click="evtCreateArticle">发布</li>
    </admin-nav>
    <editor v-ref:editor></editor>
  </div>
</template>

<script>
import { createArticle } from '../vuex/actions'
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
      if ($.trim(this.title) === '') {
        return '请输入标题！'
      }

      if ($.trim(this.tags) === '') {
        return '请输入标签！'
      }

      if (this.tags.length > 15) {
        return '您输入的标签过长！请重新输入'
      }

      if ($.trim(this.sourceArticle.length) < 30) {
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
        sourceArticle: this.sourceArticle,
        markedArticle: this.markedArticle
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
      createArticle
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
@import '../assets/css/baseicon.css';
.write-container {
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
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
