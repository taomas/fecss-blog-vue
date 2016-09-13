<template>
  <div class='modal-mask' v-if="maskShow">
    <div class="modal-content"
      v-if="modalShow"
      transition="slideIn">
      <h3 class="modal-title">{{modal.title}}</h3>
      <p class="modal-txt">
        {{modal.content}}
      </p>
      <div class="footer">
        <button type="button" class="btn-ok"
         @click="confirm">确认</button>
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
      maskShow: false
    }
  },
  computed: {
    modal () {
      return this.$root.RADON_MODAL
    },
    modalShow () {
      return this.$root.RADON_MODAL.show
    }
  },
  watch: {
    modalShow (newVal, oldVal) {
      if (!newVal) {
        setTimeout(() => {
          this.maskShow = newVal
        }, 300)
      } else {
        this.maskShow = newVal
      }
    }
  },
  methods: {
    confirm () {
      if (this.modal.confirm) {
        this.modal.confirm()
      }
      this.modal.show = false
    },
    cancel () {
      if (this.modal.cancel) {
        this.modal.cancel()
      }
      this.modal.show = false
    }
  },
  ready () {
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
  .modal-txt{
    padding: 30px;
    text-align: center;
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
    .btn-ok {
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
