<template>
  <div class="modal-container">
    <div class="modal-mask" v-if="modalShow">
    </div>
    <div class="modal-content"
      v-if="modalShow"
      transition="slideIn">
      <h3 class="modal-title">{{modalTitle}}</h3>
      <input class="modal-ipt" type="text" placeholder="请插入链接"
        v-model="link">
      <div class="footer">
        <button type="button" class="btn-confirm"
         @click="confirm">确定</button>
         <button type="button" class="btn-cancel"
          @click="cancel">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      link: ''
    }
  },
  props: {
    modalShow: {
      type: Boolean,
      required: true
    },
    modalTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    confirm () {
      this.$parent.modelConfirm(this.link)
      this.link = ''
    },
    cancel () {
      this.$parent.modelCancel(this.link)
      this.link = ''
    }
  }
}
</script>


<style scoped>
.modal-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: absolute;
  left: 50%;
  top: 200px;
  width: 500px;
  height: 200px;
  margin-left: -250px;
  border-radius: 5px;
  background: #fff;
  .modal-title {
    font-size: 16px;
    text-align: center;
  }
  .modal-ipt{
    display: block;
    width: 80%;
    height: 30px;
    margin: 30px auto;
    padding-left: 10px;
    font-size: 14px;
  }
  .footer {
    display: flex;
    flex-flow: row;
    justify-content: center;
    .btn-cancel {
      width: 70px;
      height: 30px;
      border: 0;
      color: #fff;
      background: #eb7372;
      cursor: pointer;
    }
    .btn-confirm {
      width: 70px;
      height: 30px;
      margin-right: 10px;
      border: 0;
      color: #fff;
      background: #7bc585;
      cursor: pointer;
    }
  }
}

.slideIn-transition {
  transition: all .3s ease-out;
  transform: scale(1);
}

.slideIn-enter, .slideIn-leave {
  transform: scale(0);
}
</style>
