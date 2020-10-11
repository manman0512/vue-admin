<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleUploadSuccess"
      :before-upload="beforeUpload"
      :on-error="handleUploadError"
    >
      <div v-loading="loading" class="loading" />
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon" />
    </el-upload>
  </div>
</template>
<script>
export default {
  props: {
    onSuccess: {
      type: Function,
      require: true,
      default: () => {},
    },
    onError: {
      type: Function,
      require: true,
      default: () => {},
    },
  },
  data() {
    return {
      imageUrl: "",
      error: false,
      loading: false,
    }
  },
  methods: {
    handleUploadSuccess(res, file) {
      this.loading = false
      this.imageUrl = URL.createObjectURL(file.raw)
      // 触发上一级的uploadSuccess
      this.$emit("onSuccess")
    },

    handleUploadError() {
      this.loading = false
      this.imageUrl = ""
      this.$emit("onError")
    },
    beforeUpload(file) {
      this.error = false
      const isJPG = file.type === "image/jpeg"
      const isLt2M = file.size / 1024 / 1024 < 1

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!")
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 1MB!")
      }
      this.loading = true
      return isJPG && isLt2M
    },
  },
}
</script>
<style>
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
  width: 160px;
  height: 160px;
  line-height: 160px;
  text-align: center;
}
.avatar {
  width: 160px;
  height: 160px;
  display: block;
}
.loading {
  width: 160px;
  height: 160px;
  position: absolute;
}
</style>
