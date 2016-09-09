<template>
  <div class="posts-container rd-col-14">
    <div class="posts-wrap">
      <h1 class="posts-head-title">文章</h1>
      <div class="posts-article">
        <ul class="posts-article-list">
          <li class="posts-article-item" v-for="article in articles">
            <h4 class="article-head-title"
              v-link="{name: 'page', params: {id: article.sourceLink}}">{{article.articleTitle}}</h4>
            <span class="article-head-time">{{article.createTime}}</span>
            <p class="article-content-desc">
              {{article.articleContent}}
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
export default {
  data () {
    return {
      articles: [
        {
          createTime: '2016年8月8日',
          articleTitle: '始终相信努力奋斗的意义，因为那是本质问题',
          articleContent: '你说你喜欢雨，但是下雨的时候，你却撑了伞；你说你喜欢阳光，但当阳光播撒的时候，你却躲阴凉之地；你说你喜欢风，但清风扑面的时候，你却关上了窗户。我害怕，你对我也是如此之爱。',
          sourceLink: '123'
        },
        {
          createTime: '2016年8月8日',
          articleTitle: '始终相信努力奋斗的意义，因为那是本质问题',
          articleContent: '你说你喜欢雨，但是下雨的时候，你却撑了伞；你说你喜欢阳光，但当阳光播撒的时候，你却躲阴凉之地；你说你喜欢风，但清风扑面的时候，你却关上了窗户。我害怕，你对我也是如此之爱。',
          sourceLink: '123'
        },
        {
          createTime: '2016年8月8日',
          articleTitle: '始终相信努力奋斗的意义，因为那是本质问题',
          articleContent: '你说你喜欢雨，但是下雨的时候，你却撑了伞；你说你喜欢阳光，但当阳光播撒的时候，你却躲阴凉之地；你说你喜欢风，但清风扑面的时候，你却关上了窗户。我害怕，你对我也是如此之爱。',
          sourceLink: '123'
        },
        {
          createTime: '2016年8月8日',
          articleTitle: '始终相信努力奋斗的意义，因为那是本质问题',
          articleContent: '你说你喜欢雨，但是下雨的时候，你却撑了伞；你说你喜欢阳光，但当阳光播撒的时候，你却躲阴凉之地；你说你喜欢风，但清风扑面的时候，你却关上了窗户。我害怕，你对我也是如此之爱。',
          sourceLink: '123'
        },
        {
          createTime: '2016年8月8日',
          articleTitle: '始终相信努力奋斗的意义，因为那是本质问题',
          articleContent: '你说你喜欢雨，但是下雨的时候，你却撑了伞；你说你喜欢阳光，但当阳光播撒的时候，你却躲阴凉之地；你说你喜欢风，但清风扑面的时候，你却关上了窗户。我害怕，你对我也是如此之爱。',
          sourceLink: '123'
        }
      ]
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
