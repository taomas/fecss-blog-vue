<template>
  <div class="article-container rd-col-14">
    <article class="article-wrap">
      <h1 class="article-head-title">{{articleDetail.title}}</h1>
      <ul class="article-nav-list">
        <li class="article-nav-item">
          <i class="icon-calendar ion-clock"></i>
          {{articleDetail.createTime}}
        </li>
      </ul>
      <p class="article-content" v-html="content">
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
  methods: {
    toggleScrollTop () {
      $(window).scrollTop(0)
    }
  },
  ready () {
    this.getArticleDetail(this.$route.params.id)
    this.toggleScrollTop()
  },
  vuex: {
    getters: {
      articleDetail: state => state.articleDetail
    },
    actions: {
      getArticleDetail
    }
  }
}
</script>

<style scoped>
.article-container {
  box-sizing: border-box;
  margin-left: 30px;
  .article-wrap {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 30px 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06);
    margin-bottom: 30px;
  }
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
