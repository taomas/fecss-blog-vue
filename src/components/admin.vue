<template>
  <div class="admin">
    <admin-nav></admin-nav>
    <div class="admin-content">
      <ul class="admin-table-head rd-row-flex">
        <li class="table-head-title">标题</li>
        <li class="table-head-time">日期</li>
        <li class="table-head-operate">选项</li>
      </ul>
      <ul class="admin-table-content">
        <li class="admin-table-item rd-row-flex" v-for="article in articleList">
          <div class="table-content-title"
            v-link="{name: 'page', params: {id: article._id}}">
            {{article.title}}
          </div>
          <div class="table-content-time">
            {{article.createTime}}
          </div>
          <div class="table-content-operate">
            <i class="icon-edit ion-edit"></i>
            <i class="icon-delete ion-trash-a"
              @click="evtRemoveArticle(article._id)"
            ></i>
          </div>
        </li>
      </ul>
      <page-nav></page-nav>
    </div>
  </div>
</template>

<script>
import { getArticleList, removeArticleById } from '../vuex/actions'
import adminNav from './common/adminNav'
import pageNav from './common/pageNav'
export default {
  data () {
    return {
    }
  },
  methods: {
    evtRemoveArticle (articleId) {
      this.$Modal.create('提示', '确认删除该文章！', () => {
        const opts = {
          id: articleId
        }
        this.removeArticleById(opts).then(() => {
          this.$Modal.create('提示', '删除文章成功', () => {
            this.getArticleList({
              start: this.startIndex,
              limit: 5
            })
          })
        })
      })
    }
  },
  ready () {
    this.getArticleList({
      start: this.startIndex,
      limit: 5
    })
  },
  vuex: {
    getters: {
      startIndex: state => state.startIndex,
      articleList: state => state.articleList
    },
    actions: {
      getArticleList,
      removeArticleById
    }
  },
  components: {
    'admin-nav': adminNav,
    'page-nav': pageNav
  }
}
</script>

<style scoped>
.admin-content {
  width: 70%;
  height: auto;
  margin: 0 auto;
  padding-top: 80px;
}

.admin-table-head {
  box-sizing: border-box;
  padding: 15px 30px;
  border: 1px solid #ccc;
  .table-head-title {
    width: 50%;
    text-align: left;
  }
  .table-head-time {
    width: 25%;
    text-align: center;
  }
  .table-head-operate {
    width: 25%;
    text-align: right;
  }
}

.admin-table-content {
  box-sizing: border-box;
  margin-bottom: 30px;
  .admin-table-item {
    position: relative;
    padding: 15px 30px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    &:nth-child(2n) {
      background: #f5f5f5;
    }
    &:nth-child(2n+1) {
      background: #fff;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0;
      background: #42b983;
      transition: all 0.4s ease-in;
    }
    &:hover {
      border-bottom: 0;
      &:after {
        width: 100%;
      }
    }
  }
  .table-content-title {
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    cursor: pointer;
  }
  .table-content-time {
    width: 25%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  .table-content-operate {
    width: 25%;
    font-size: 18px;
    text-align: right;
    .icon-edit {
      margin-right: 15px;
      cursor: pointer;
    }
    .icon-delete {
      cursor: pointer;
    }
  }
}
</style>
