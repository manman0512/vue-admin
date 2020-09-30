<template>
  <div class="send-code-button">
    <el-input
      placeholder="验证码"
      :size="size"
      class="code-input"
      :value="value"
    />
    <el-button
      v-if="!isSend"
      :size="size"
      class="code"
      @click="handleSendCode"
    >
      发送验证码
    </el-button>
    <el-button
      v-else
      :size="size"
      class="count"
      :disabled="isSend"
    >已发送({{ count }}s)</el-button>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "small"
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      code: "",
      count: 60,
      isSend: false,
      timer: null
    }
  },
  beforeDestroy() {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  },
  methods: {
    handleSendCode() {
      this.isSend = true;
      this.count = this.count--;
      this.timer = setInterval(() => {
        if (this.count === 0) {
          this.isSend = false;
          this.count = 60;
          if (this.timer !== null) {
            clearInterval(this.timer);
          }
          return;
        }
        this.count--;
      }, 1000);
      this.sendCode();
    },
    sendCode() {
      console.log("发送验证码");
    }
  }
};
</script>
<style lang="scss">
.send-code-button {
  width: 200px;
  position: relative;
  display: flex;
  justify-content: space-between;

  .code-input {
    width: calc(100% - 100px);
  }

  .code {
    width: 92px;
  }

  .count {
    width: 92px;
  }
}
</style>
