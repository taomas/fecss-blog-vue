<template>
  <div class="admin-head">
    <ul class="admin-head-nav">
      <li class="admin-head-item admin-btn-home" v-link="{name: 'home'}">首页</li>
      <li class="admin-head-item admin-btn-home" v-link="{name: 'admin'}">控制台</li>
      <li class="admin-head-item admin-btn-home" v-link="{name: 'write'}">新增文章</li>
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.admin-head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12);
  .admin-head-nav {
    width: 70%;
    height: 50px;
    margin: 0 auto;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  .admin-head-item {
    float: left;
    width: 80px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    border-right: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #5b6064;
      color: #f5f5f5;
    }
  }
  .admin-btn-confirm {
    float: right;
    border-left: 1px solid #ccc;
    border-right: 0;
  }
}
</style>
