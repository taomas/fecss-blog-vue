<template>
  <div class="page-nav">
    <div class="page-nav-pre">
      <i class="icon-pre ion-chevron-left"></i>
      上一页
    </div>
    <div class="page-nav-next">
      下一页
      <i class="icon-next ion-chevron-right"></i>
    </div>
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
.page-nav {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  .page-nav-pre, .page-nav-next {
    position: relative;
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #444;
    background: #fff;
    border: 1px solid rgba(0,0,0,.06);
    cursor: pointer;
    &:hover {
      background: rgba(0, 0, 0, 0.6);
      color: #f5f5f5;
    }
  }
  .page-nav-pre {
    .icon-pre {
      margin-right: 5px;
    }
  }
  .page-nav-next {
    .icon-next {
      margin-left: 5px;
    }
  }
}
</style>
