<template>
  <div class="article-container rd-col-14"
    :class="{'adapter': loadingStatus === false}">
    <article class="article-wrap"
    :class="{'transition-show': loadingStatus === true}">
      <h1 class="article-head-title">{{articleDetail.title}}</h1>
      <ul class="article-nav-list">
        <li class="article-nav-item">
          <i class="icon-calendar ion-clock"></i>
          {{articleDetail.createTime}}
        </li>
      </ul>
      <p class="article-content markdown-body"
        v-html="articleDetail.content">
      </p>
    </article>
  </div>
</template>

<script>
import marked from 'marked'
import { getArticleDetail } from '../../vuex/actions'

export default {
  data () {
    return {
      loadingStatus: false
    }
  },
  filters: {
    marked
  },
  computed: {
    articleId () {
      return this.$route.params.id
    },
    content () {
      const sourceContent = this.articleDetail.sourceContent || ''
      return marked(sourceContent)
    }
  },
  watch: {
    articleId () {
      this.getArticleDetail(this.articleId)
    },
    showLoading (newVal, oldVal) {
      if (!newVal) {
        setTimeout(() => {
          this.loadingStatus = true
        }, 300)
      } else {
        this.loadingStatus = false
      }
    }
  },
  methods: {
    toggleScrollTop () {
      $(window).scrollTop(0)
    }
  },
  ready () {
    this.getArticleDetail(this.articleId)
    this.toggleScrollTop()
  },
  vuex: {
    getters: {
      articleDetail: state => state.articleDetail,
      showLoading: state => state.showLoading
    },
    actions: {
      getArticleDetail
    }
  }
}
</script>

<style scoped>
.adapter {
  min-height: 1000px;
}

.article-container {
  box-sizing: border-box;
  margin-left: 30px;
  padding: 30px 20px;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06);
}

.article-wrap {
  box-sizing: border-box;
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 30px;
  transition: all 0.3s;
  opacity: 0;
}

.transition-show {
  opacity: 1;
}

.article-head-title {
  font-size: 36px;
  line-height: 42px;
  font-weight: 400;
  margin: 0 0 15px 0;
}

.article-nav-list {
  margin-bottom: 30px;
}

.article-nav-item {
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
}

.article-content {
  margin: 0;
  font-size: 14px;
  line-height: 20pt;
}


</style>
