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
      <p class="article-content" v-html="articleDetail.content">
      </p>
    </article>
  </div>
</template>

<script>
import {getArticleDetail} from '../vuex/actions'

export default {
  data () {
    return {
      article: {
        title: '多少红颜爱傻逼，多少傻逼不珍惜',
        createTime: '2016-08-08',
        articleContent: '多少红颜爱傻逼，多少傻逼不珍惜多少红颜爱傻逼，多少傻逼不珍惜多少红颜爱傻逼，多少傻逼不珍惜多少红颜爱傻逼，多少傻逼不珍惜多少红颜爱傻逼，多少傻逼不珍惜多少红颜爱傻逼，多少傻逼不珍惜'
      }
    }
  },
  ready () {
    let id = this.$route.params.id
    console.log(id)
    this.getArticleDetail(id)
  },
  vuex: {
    getters: {
      articleDetail: state => state.articleDetail.detail
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
  font-size: 12px;
  line-height: 20pt;
}
</style>
