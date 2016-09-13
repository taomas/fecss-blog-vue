<template>
  <div class="admin">
    <admin-header></admin-header>
    <div class="admin-content">
      <ul class="admin-table-head rd-row-flex">
        <li class="table-head-title">标题</li>
        <li class="table-head-time">日期</li>
        <li class="table-head-operate">选项</li>
      </ul>
      <ul class="admin-table-content">
        <li class="admin-table-item rd-row-flex" v-for="article in articleList">
          <div class="table-content-title">
            {{article.title}}
          </div>
          <div class="table-content-time">
            {{article.createTime}}
          </div>
          <div class="table-content-operate">
            <i class="icon-edit ion-edit"></i>
            <i class="icon-delete ion-trash-a"></i>
          </div>
        </li>
      </ul>
      <page-nav></page-nav>
    </div>
  </div>
</template>

<script>
import { getArticleList } from '../vuex/actions'
import adminHeader from './common/adminHeader'
import pageNav from './pageNav'
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
    'admin-header': adminHeader,
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
