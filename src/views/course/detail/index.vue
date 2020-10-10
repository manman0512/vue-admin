<template>
  <DragImage
    :list="file_list"
    :multiple="true"
    :limit="10"
    :action="uploadUrl"
    :on-error="uploadError"
    :on-success="bannerPicSuccess"
    :before-upload="beforeAvatarUpload"
    @update="updateFile"
  />
</template>
<script>
import { Loading } from "element-ui";
import DragImage from '@/components/DragImage';
export default {
  components: {
    DragImage
  },
  data() {
    return {
      banner_list: [], // ele用的
      file_list: [], // 自己用的
      bargain: {
        share_image: ""
      },
      number: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    // 上传图片路径
    uploadUrl() {
      return `http://10.13.30.85:5050/upload/image`;
    },
    // 图片长传-之前
    beforeAvatarUpload(file) {
      const self = this;
      const type_arr = ["image/jpeg", "image/png"];
      const type = file.type;
      if (!type_arr.includes(type)) {
        this.$message.error("图片格式不正确,只支持jpg和png类型图片");
        return false;
      }
      const is_size = new Promise((resolve, reject) => {
        const img = new Image();
        img.src = window.URL.createObjectURL(file);
        img.onload = () => {
          // const valid = img.width === width && img.height === height;
          const valid = true
          if (valid) {
            Loading.service({ fullscreen: true, text: "图片上传中，请稍后" });
            resolve(file);
          } else {
            self.$message.error("请上传400*320px大小的图片!");
            reject();
          }
        };
      });
      return is_size;
    },
    // Banner图-成功
    bannerPicSuccess(res) {
      console.log(res)
      this.bargain.share_image = res.newFileName;
      Loading.service({ fullscreen: true }).close();
      this.file_list.push(res.newFileName);
    },
    // Banner图片上传报错
    uploadError() {
      this.$message.error("上传失败，请重新上传");
      Loading.service({ fullscreen: true }).close();
    },
    updateFile(val) {
      this.file_list = val;
      console.log(this.file_list);
    }
  }
};
</script>
