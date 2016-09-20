<template>
  <div class="edit-panel">
    <input class="write-head-title" type="text" name="title" placeholder="请输入标题"
      v-model="title">
    <input class="write-head-tags" type="text" name="name" name="tags" value="" placeholder="标签"
      v-model="tags">
    <div class="write-content rd-row-flex">
      <div class="write-panel">
        <textarea class="write-panel-textarea"
          v-model="article"
          debounce="300"
          ></textarea>
      </div>
      <div class="write-preview markdown-body" v-html="markedArticle">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: String,
      default: ''
    },
    article: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.edit-panel {
  input {
    display: block;
    box-sizing: border-box;
    padding-left: 15px;
    outline: none;
    border-radius: 2px;
    border: 1px solid #ccc;
  }

  .write-head-title {
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
  }

  .write-head-tags {
    width: 100%;
    height: 35px;
    margin-bottom: 30px;
  }

  .write-content {
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
    .write-panel {
      position: relative;
      box-sizing: border-box;
      width: 50%;
      height: 100%;
      border-right: 1px solid #ccc;
    }
    .write-preview {
      box-sizing: border-box;
      width: 50%;
      height: 100%;
      padding: 10px;
      font-size: 14px;
      color: #333;
      overflow-y: scroll;
    }
  }

  .write-panel-textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    line-height: 21px;
    margin: 0;
    padding: 10px;
    color: #555;
    font-size: 14px;
    resize: none;
    outline: none;
    border: 0;
    z-index: 99;
  }
}
</style>
