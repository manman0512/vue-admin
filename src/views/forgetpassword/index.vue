<template>
  <div class="change-container">
    <el-form
      ref="changeForm"
      :model="changeForm"
      :rules="changeRules"
      class="change-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">修改密码</h3>
      </div>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="changeForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          auto-complete="on"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item prop="confirmPassword">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="confirmPassword"
          v-model="changeForm.password"
          :type="passwordType"
          placeholder="Confirm Password"
          name="confirmPassword"
          tabindex="2"
          auto-complete="on"
        />
        <span class="show-pwd" @click="showComfirmPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>
      <el-form-item>
        <span class="svg-container">
          <i class="el-icon-mobile-phone" style="color:#fff;font-size: 1.2em;" />
        </span>
        <el-input
          v-model="changeForm.phone"
          placeholder="Phone"
          name="phone"
          tabindex="2"
          auto-complete="on"
        />
      </el-form-item>
      <el-form-item class="send-code-container">
        <send-code />
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:20px;"
        @click.native.prevent="handleSubmit"
      >确认修改</el-button>
      <div class="to-register-login">
        <span @click="toRegister">申请注册</span>
        <span>|</span>
        <span @click="$router.push('/login')">去登录</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import SendCode from "@/components/SendCode/index"

export default {
  name: "Login",
  components: {
    SendCode
  },
  data() {
    const validateConfirmPassword = (rule, value, callback) => {
      if (value !== this.changeForm.password) {
        callback(new Error("两次输入的密码不一致"))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码不能小于6位数"))
      } else {
        callback()
      }
    }
    return {
      changeForm: {
        password: '',
        confirmPassword: '',
        phone: null,
        code: null
      },
      changeRules: {
        password: [
          {
            required: true,
            trigger: "blur",
            validator: validatePassword,
          },
        ],
        confirmPassword: [
          {
            required: true,
            trigger: "blur",
            validator: validateConfirmPassword,
          },
        ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = ""
      } else {
        this.passwordType = "password"
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    showComfirmPwd() {
      if (this.passwordType === "password") {
        this.passwordType = ""
      } else {
        this.passwordType = "password"
      }
      this.$nextTick(() => {
        this.$refs.confirmPassword.focus()
      })
    },
    handleSubmit() {
      this.$refs.changeForm.validate((valid) => {
        if (valid) {
          // 修改密码
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    toRegister() {
      console.log(this.$route)
      this.$router.push({
        path: "/register",
      })
    },
  },
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .change-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.change-container {
  .el-input {
    display: inline-block;
    height: 40px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 40px;
      caret-color: $cursor;

      &:-webkit-autofill {
        -webkit-text-fill-color: #ffffff !important;
        transition: background-color 5000s ease-in-out 0s !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid #fff;
    border-radius: 5px;
    color: #454545;

    .el-form-item__content {
      line-height: 30px;

      svg {
        color: #fff;
      }
    }

  }
  .send-code-container {
    position:relative;
    width:calc(100% - 100px);
    .code,.count{
      position:absolute;
      height:100%;
      background-color: transparent;
      right:-92px;
      border: 1px solid #fff;
      border-radius: 5px;
      color:#fff
    }
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.change-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-image: url("../../assets/bg.jpg");
  background-color: $bg;
  background-size: cover;

  .change-form {
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    background: hsla(0, 0%, 100%, 0.5);
    width: 350px;
    text-align: center;
    border-radius: 10px;
    padding: 30px;

  }

  .to-register-login {
    display: flex;
    justify-content: center;
    color: #fff;
    height: 30px;
    font-size: 14px;

    span {
      display: inline-block;
      margin: 0 10px;
      cursor: pointer;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
