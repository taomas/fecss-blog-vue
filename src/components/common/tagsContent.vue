<template>
  <div class="tags-container rd-col-14">
    <h1 class="tags-head-title">标签</h1>
    <div class="tags-wrap"
      transition="fadeIn"
      v-show="showLoading === false">
      <section class="tags">
        <h2 class="tags-year">{{tagsContent.tags}}</h2>
        <ul class="tags-list">
          <li class="tags-item" v-for="item in tagsContent.content">
            <span class="post-time">{{item.createTime}}</span>
            <a class="post-title-link"
              v-link="{name: 'page', params: {id: item._id}}">
              {{item.title}}
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import { getTagsContent } from '../../vuex/actions'
export default {
  data () {
    return {
    }
  },
  components: {
  },
  ready () {
    const tags = this.$route.params.id
    this.getTagsContent(tags)
  },
  vuex: {
    getters: {
      tagsContent: state => state.tagsContent,
      showLoading: state => state.showLoading
    },
    actions: {
      getTagsContent
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/animate.css';

.tags-container {
  box-sizing: border-box;
  min-height: 435px;
  margin-left: 30px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12);
}
.tags-head-title {
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
.tags-wrap {
  padding: 0 30px;
}
.tags {
  border-left: 2px solid #42b983;
  .tags-year {
    position: relative;
    padding-left: 10px;
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      top: 12px;
      width: 10px;
      height: 10px;
      margin-left: -6px;
      background: #42b983;
      border-radius: 50%;
      border: 1px solid #fff;
    }
  }
  .tags-item {
    position: relative;
    padding: 10px 0;
    border-bottom: 1px dashed #ccc;
    &::before {
      content: " ";
      position: absolute;
      left: 0;
      top: 20px;
      width: 6px;
      height: 6px;
      margin-left: -4px;
      background: #42b983;
      border-radius: 50%;
      border: 1px solid #fff;
      transition: all 0.3s;
    }
    &:hover {
      &::before {
        background: #11a763;
      }
      & {
        border-bottom: 1px dashed #aaa;
      }
    }
    .post-time {
      position: absolute;
      left: 26px;
      top: 12px;
      font-size: 14px;
    }
    .post-title-link {
      font-size: 16px;
      margin-left: 140px;
      color: #42b983;
    }
  }
}
</style>
