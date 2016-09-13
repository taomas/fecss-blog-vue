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
              {{{article.content | substrArticle}}}
            </p>
            <div class="article-content-nav">
              <div class="article-tags rd-row-flex">
                <i class="icon-tags ion-ios-pricetags"></i>
                <ul class="article-tags-list">
                  <li class="article-tags-item">{{article.tags}}</li>
                </ul>
              </div>
              <span class="article-readmore"
                v-link="{name: 'page', params: {id: article._id}}">查看更多>></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <page-nav></page-nav>
  </div>
</template>

<script>
import pageNav from './pageNav.vue'
import {getArticleList} from '../../vuex/actions'

export default {
  data () {
    return {
    }
  },
  filters: {
    substrArticle (value) {
      return value.substr(0, 50)
    }
  },
  ready () {
    this.getArticleList({
      start: 0,
      limit: 5
    })
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
    padding: 15px 30px 15px;
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
  width: 100%;
  max-height: 100px;
  margin: 0;
  color: #7f7f7f;
  overflow: hidden;
}

.article-content-nav {
  width: 100%;
  height: 20px;
  padding-top: 10px;
  border-top: 1px dotted #ccc;
  .icon-tags {
    font-size: 16px;
    margin-right: 20px;
  }
  .article-tags {
    float: left;
  }
  .article-tags-list {
    padding-top: 2px;
    .article-tags-item {
      position: relative;
      width: auto;
      height: 18px;
      line-height: 16px;
      padding: 0 10px;
      font-size: 12px;
      color: #fff;
      background: #ba8f6c;
      cursor: pointer;
      z-index: 100;
      &:before {
        content: " ";
        width: 0px;
        height: 0px;
        position: absolute;
        top: 0;
        left: -18px;
        border: 9px solid transparent;
        border-right-color: #ba8f6c;
      }
      &:after {
        content: " ";
        width: 4px;
        height: 4px;
        background-color: #fff;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        -webkit-box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
        box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);
        position: absolute;
        top: 7px;
        left: 2px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .article-readmore {
    float: right;
    width: auto;
    height: 20px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    color: #fff;
    background: #4d4d4d;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
