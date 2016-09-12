<template>
  <div class="posts-container rd-col-14">
    <div class="posts-wrap">
      <h1 class="posts-head-title">文章</h1>
      <div class="posts-article">
        <ul class="posts-article-list">
          <li class="posts-article-item" v-for="article in articleList">
            <h4 class="article-head-title"
              v-link="{name: 'page', params: {id: article._id}}">{{article.title}}</h4>
            <span class="article-head-time">{{article.createTime}}</span>
            <p class="article-content-desc">
              {{{article.content}}}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <page-nav></page-nav>
  </div>
</template>

<script>
import pageNav from './pageNav.vue'
import {getArticleList} from '../vuex/actions'

export default {
  data () {
    return {
    }
  },
  ready () {
    this.getArticleList()
  },
  vuex: {
    getters: {
      articleList: state => state.articleList.articleList
    },
    actions: {
      getArticleList
    }
  },
  components: {
    'page-nav': pageNav
  }
}
</script>

<style scoped>
.posts-container {
  box-sizing: border-box;
  margin-left: 30px;
  .posts-wrap {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06);
    margin-bottom: 30px;
  }
}

.posts-head-title {
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  line-height: 55px;
  font-size: 16px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.4);
  padding: 0 30px;
  margin: 0;
  border-bottom: 1px solid #eee;
}

.posts-article-list {
  .posts-article-item {
    position: relative;
    padding: 15px 30px 30px;
    border-bottom: 1px solid #eee;
    &:after {
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;
      height: 2px;
      width: 0;
      background: #42b983;
      transition: all 0.4s ease-in;
    }
    &:hover {
      .article-head-title {
        color: #42b983;
      }
      &:after{
        width: 100%;
      }
    }
  }
}

.article-head-title {
  margin: 0 0 10px 0;
  cursor: pointer;
}

.article-head-time {
  display: block;
  font-size: 12px;
  color: #999;
  margin-bottom: 20px;
}

.article-content-desc {
  margin: 0;
  color: #7f7f7f;
}
</style>
