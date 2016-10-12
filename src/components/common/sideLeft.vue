<template>
  <div class="aside-left rd-col-4">
    <div class="aside-panel">
      <div class="aside-head-avator">
        <img class="aside-head-img" src="../../assets/img/avatar.jpg" alt="" />
        <h3 class="aside-head-title">
          <a href="">
            文刀三授
          </a>
        </h3>
        <span class="aside-head-subtitle">前端小菜鸟</span>
      </div>
      <ul class="aside-menu-list">
        <li class="aside-menu-item"
          v-for="item in menus"
          v-link="{name: item.sourceLink}">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {name: '文章', sourceLink: 'home'},
        {name: '分类', sourceLink: 'archive'},
        {name: '标签', sourceLink: 'tags'},
        {name: '站长登陆', sourceLink: 'admin'}
      ]
    }
  },
  methods: {
    adaptorHeight () {
    }
  }
}
</script>

<style scoped>
.aside-left {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.aside-panel {
  position: fixed;
  top: 80px;
  width: 187px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.12);
}

.aside-head-avator {
  padding-top: 28px;
  margin-bottom: 28px;
  &:hover {
    .aside-head-title:after {
      transform: scaleX(0);
    }
  }
}

.aside-head-img {
  display: block;
  width: 100px;
  height: 100px;
  margin: 0 auto 28px;
  border-radius: 100%;
}

.aside-head-title {
  position: relative;
  width: 118px;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  margin: 0 auto;
  a {
    color: rgba(0, 0, 0, 0.8);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in;
    transform: scaleX(1);
  }
}

.aside-head-subtitle {
  display: block;
  font-size: 12px;
  text-align: center;
  padding: 0 10px;
  margin: 10px 0 0 0;
}

.aside-menu-list {
  position: relative;
  padding-bottom: 28px;
  .aside-menu-item {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    color: #888;
    border-top: 1px solid #eee;
    cursor: pointer;
    transition: all 0.4s ease;
    &:nth-last-child(1) {
      border-bottom: 1px solid #eee;
    }
    &:hover {
      background: #42b983;
      color: #f5f5f5;
    }
  }
}
</style>
