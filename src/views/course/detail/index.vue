<template>
  <DragImage
    :list="file_list"
    :multiple="true"
    :limit="10"
    :action="uploadUrl"
    :on-success="onSuccess"
    @update="updateFile"
  />
</template>
<script>
import DragImage from '@/components/DragImage';
export default {
  components: {
    DragImage
  },
  data() {
    return {
      file_list: [], // 自己用的
      bargain: {
        share_image: ""
      },
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
    // Banner图-成功
    onSuccess(res) {
      this.bargain.share_image = res.newFileName;
      this.file_list.push(res.newFileName);
    },
    // Banner图片上传报错
    updateFile(val) {
      this.file_list = val;
    }
  }
};
</script>
