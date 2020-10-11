<template>
  <div class="com-image-drag">
    <div class="image-list">
      <!-- 拖拽层 -->
      <div
        v-show="drag_open"
        class="list-wrap move"
      >
        <draggable
          v-model="banner_list"
          :options="{
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'chosenClass',
            scroll: true,
            scrollSensitivity: 200
          }"
        >
          <div
            v-for="($item, $index) in banner_list"
            :key="$index"
            class="image-item"
            :style="{ backgroundImage: `url(${$item.url})` }"
          />
        </draggable>
      </div>
      <!-- 展示层 -->
      <div
        v-show="!drag_open"
        class="list-wrap"
      >
        <div
          v-for="($item, $index) in banner_list"
          :key="$index"
          class="image-item"
          :style="{ backgroundImage: `url(${$item.url})` }"
          @mouseover.prevent="$item.is_hover = true"
          @mouseleave.prevent="$item.is_hover = false"
        >
          <div
            v-show="!$item.is_hover"
            class="label"
          >
            <i class="el-icon-upload-success el-icon-check icon-success" />
          </div>
          <div
            v-show="$item.is_hover"
            class="mask"
          >
            <i
              class="el-icon-delete bin"
              @click="deleteImage($index)"
            />
          </div>
        </div>
        <el-upload
          v-show="limit == 0 || banner_list.length < limit"
          list-type="picture-card"
          name="img"
          class="upload-machine"
          :disabled="drag_open"
          :action="action()"
          :on-error="uploadError"
          :on-success="bannerPicSuccess"
          :before-upload="beforeImgUpload"
          :show-file-list="false"
          :multiple="multiple"
          enctype="multipart/form-data"
        > <i class="el-icon-plus avatar-uploader-icon" /></el-upload>
      </div>
    </div>
    <div class="button-list">
      <el-button
        v-if="!drag_open && limit>1"
        :disabled="banner_list.length <= 1"
        type="text"
        size="small"
        class="operation-success"
        @click="openDrag"
      >编辑拖拽</el-button>
      <el-button
        v-if="drag_open"
        type="text"
        size="small"
        class="operation-success"
        @click="save"
      >保存</el-button>
      <el-button
        v-if="drag_open"
        type="text"
        size="small"
        class="operation-error"
        @click="cancle"
      />
    </div>
  </div>
</template>
<script>
/**
 * @description 为了方便上传图片组件可拖拽排序，不改变饿了么插件的逻辑，只做视图层的展示
 * @param {Array} list 图片数组
 * @param {Number} limit 最多可上传几张图片
 * @param {Function} action 上传接口地址
 * @param {Boolean} multiple 是否批量上传
 * @param {Function} beforeUpload 上传之前的回调，用于校验
 * @param {Function} onSuccess 上传成功的回调函数
 * @param {Function} onError 上传失败的回调函数
 */
import draggable from "vuedraggable";
import { Loading } from "element-ui";
export default {
  name: "ComImageShow",
  components: {
    draggable
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    limit: {
      type: Number,
      default: 0
    },
    multiple: {
      type: Boolean,
      default: false
    },
    action: {
      type: Function,
      default: () => { }
    },
    beforeUpload: {
      type: Function,
      default: null
    },
    onError: {
      type: Function,
      default: () => { }
    },
    onSuccess: {
      type: Function,
      default: () => { }
    }
  },
  data() {
    return {
      banner_list: [], // 拖拽插件不建议直接改变父组件的传值，所以另建一个新数组
      file_list: [], // 保存开启拖拽之前排序的数组
      drag_open: false // 拖拽开启开关
    };
  },
  watch: {
    // 监听父组件传值改变
    list(arr) {
      if (arr.length > this.limit && this.limit !== 0) {
        this.$message.warning(`当前最多可上传${this.limit}张图片`);
        return false;
      }
      this.banner_list = arr.map(url => {
        const obj = {
          url: url,
          is_hover: false
        };
        return obj;
      });
    }
  },
  mounted() {
    // 初始数组拷贝
    this.banner_list = this.list.map(url => {
      const obj = {
        url: url,
        is_hover: false,
        loading: false
      };
      return obj;
    });
  },
  methods: {
    // 删除图片
    deleteImage(i) {
      this.banner_list.splice(i, 1);
      this.$emit("update", this.banner_list.map(item => item.url));
    },
    // 开启拖拽
    openDrag() {
      this.file_list = JSON.parse(JSON.stringify(this.banner_list)); // 数组深拷贝
      this.drag_open = true;
    },
    // 取消拖拽
    cancle() {
      this.banner_list = this.file_list;
      this.drag_open = false;
    },
    // 拖拽保存
    save() {
      this.$emit("update", this.banner_list.map(item => item.url));
      this.drag_open = false;
    },
    beforeImgUpload(file) {
      console.log(file)
      if (this.beforeUpload) {
        this.$emit("beforeImgUpload", file)
        return
      }
      // 图片长传-之前
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
            // 图片长传-之前
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
      Loading.service({ fullscreen: true }).close();
      if (this.onSuccess) this.onSuccess(res)
    },
    // Banner图片上传报错
    uploadError() {
      Loading.service({ fullscreen: true }).close();
      if (this.onError) {
        this.onError()
        return
      }
      this.$message.error("上传失败，请重新上传");
    },
  }
};
</script>
<style lang="scss" scoped>
.com-image-drag {
  &:after {
    display: block;
    clear: both;
    content: "";
  }
  .image-list {
    float: left;
    &:after {
      display: block;
      clear: both;
      content: "";
    }
    .list-wrap {
      float: left;
      .el-icon-upload-success.el-icon-check.icon-success {
        position: relative;
        top: 8px;
      }
      &.move {
        .image-item {
          &:hover {
            cursor: move;
          }
        }
      }
    }
    .image-item {
      width: 148px;
      height: 148px;
      position: relative;
      margin-right: 10px;
      margin-bottom: 10px;
      border: 1px solid #c0ccda;
      background-size: 100% 100%;
      border-radius: 6px;
      float: left;
      overflow: hidden;
      cursor: pointer;
    }

    .label {
      width: 46px;
      height: 26px;
      background-color: #13ce66;
      color: #ffffff;
      transform: rotate(45deg);
      text-align: center;
      position: absolute;
      right: -17px;
      top: -7px;
    }
    .icon-success {
      transform: rotate(-45deg);
    }

    .mask {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: rgba(0, 0, 0, 0.5);
      position: relative;
    }

    .bin {
      color: #ffffff;
      font-size: 20px;
      position: absolute;
      left: 45%;
      top: 43%;
    }

    .upload-machine {
      float: left;
    }
  }
  .button-list {
    clear: both;
  }
}
</style>
