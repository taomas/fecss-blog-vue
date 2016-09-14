<template>
  <div class="admin-container">
    <div class="admin-form">
      <input class="admin-form-user" type="text" value="" placeholder="用户名"
        v-model="username">
      <input class="admin-form-password" type="password" value="" placeholder="密码"
        v-model="password">
      <button class="admin-btn-login" type="button"
        @click="evtUserLogin">用户登陆</button>
      <button class="admin-btn-register" type="button"
        @click="evtUserRegister">用户注册</button>
    </div>
  </div>
</template>

<script>
import { userRegister, userLogin } from '../vuex/actions'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    evtUserLogin () {
      var opts = {
        username: this.username,
        password: this.password
      }
      this.userLogin(opts)
    },
    evtUserRegister () {
      var opts = {
        username: this.username,
        password: this.password
      }
      this.userRegister(opts)
    }
  },
  watch: {
    modelMessage (newVal, oldVal) {
      if (newVal) {
        this.$Modal.create('提示', newVal, () => {
          this.$router.go({name: 'admin'})
        })
      }
    }
  },
  vuex: {
    getters: {
      modelMessage: state => state.modelMessage
    },
    actions: {
      userRegister,
      userLogin
    }
  }
}
</script>

<style scoped>
.admin-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #ccc;
}

.admin-form {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 150px;
  margin-left: -100px;
  margin-top: -75px;
  .admin-form-user, .admin-form-password {
    box-sizing: border-box;
    display: block;
    width: 200px;
    height: 30px;
    padding-left: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
  }
  .admin-btn-login, .admin-btn-register {
    display: block;
    width: 200px;
    height: 30px;
    margin-bottom: 20px;
    border: 0;
    background: #f3f3f3;
    outline: none;
  }
}
</style>
