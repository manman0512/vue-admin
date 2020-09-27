<template>
  <div class="register-page">
    <div class="container">
      <p style="margin-top:0">
        尊敬商家您好，您正在申请入驻本平台，请认真填写下列信息。
        <br />工作人员会在2个工作日内进行资质审核并且与您取得联系，请保持电话畅通。
        <br />期待您的加入……
      </p>
      <el-form ref="form" :model="form" label-width="120px" size="small">
        <div class="form-item">
          <h2>机构信息</h2>
          <el-form-item label="机构图片：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
            >
              <img v-if="form.imageUrl" :src="form.imageUrl" />
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-form-item>
          <el-form-item label="机构名称：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="所属行业：">
            <div>
              <el-select v-model="value" placeholder="请选择" style="width:250px">
                <el-option />
              </el-select>
            </div>
          </el-form-item>
          <el-form-item label="机构证件号：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="联系地址：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="机构证件照：">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
            >
              <img v-if="form.avaterUrl" :src="form.avaterUrl" />
              <i v-else class="el-icon-plus avatar-uploader-icon" />
            </el-upload>
          </el-form-item>
        </div>

        <div class="form-item">
          <h2>账号信息</h2>
          <el-form-item label="账号名称：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="账号密码：">
            <el-input v-model="form.name" />
          </el-form-item>
        </div>
        <div class="form-item">
          <h2>联系人信息</h2>
          <el-form-item label="联系人姓名：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="联系人电话：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="验证码：">
            <div class="sendCode">
              <el-input v-model="form.name" />
              <el-button>
                发送验证码(
                <span>60s</span>)
              </el-button>
            </div>
          </el-form-item>
        </div>
        <div style="text-align:center;margin:10px 0;">
          <el-checkbox v-model="checked" style="margin:0 5px;" />
          <a href="javascript:;" class="agree" @click="$router.push('/agree')">平台入驻协议</a>
        </div>
        <div style="text-align:center">
          <el-button
            type="primary"
            size="small"
            style="padding:10px 50px;margin:10px 0;font-size:16px;"
          >提交申请</el-button>
        </div>
        <div>注：入驻审核被驳回后的7个工作日内需补充完整并提交审核，逾期需重新提交新的入驻申请；每个机构有3次申请的机会，请注意提交资质的准确性和完整性。</div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        avaterUrl: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入活动名称",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "长度在 3 到 5 个字符",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "请选择活动区域",
            trigger: "change",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.register-page {
  display: flex;
  min-height: 100%;
  width: 100%;

  .el-form {
    background: hsla(0, 0%, 100%, 0.5);
    border-radius: 10px;
    padding: 0px;

    .el-form-item__label {
      height: 36px;
      line-height: 36px;
    }

    .el-form-item {
      color: #454545;

      input {
        border-radius: 5px;
        -webkit-appearance: none;
        height: 36px;
        line-height: 36px;
        max-width: 250px;
      }

      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }

      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }

      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 148px;
        height: 148px;
        line-height: 148px;
        text-align: center;
      }

      .avatar {
        width: 148px;
        height: 148px;
        display: block;
      }
    }

    .el-checkbox__inner {
      border-radius: 50%;
      height: 16px;
      width: 16px;

      &::after {
        top: 2px;
        left: 5px;
      }
    }

    .sendCode {
      position: relative;

      input {
        width: 120px !important;
      }

      .el-button {
        position: absolute;
        top: 0;
        left: 130px;
        height: 36px;
        line-height: 36px;
        padding: 0;
        text-align: center;
        width: 120px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.register-page {
  .container {
    width: 1000px;
    margin: 50px auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 30px;

    .form-item {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      border-radius: 10px;

      h2 {
        background-color: rgb(64, 158, 255);
        margin-bottom: 18px;
        padding: 4px 30px;
        display: inline-block;
        font-size: 18px;
        font-weight: 400;
        color: #fff;
        border-top-left-radius: 10px;
        margin-top: 0;
      }
    }

    .agree {
      font-size: 14px;
      text-decoration: underline;
    }
  }
}
</style>
