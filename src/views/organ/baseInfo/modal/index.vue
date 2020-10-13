<template>
  <el-dialog
    :visible="visible"
    :title="title"
    @close="onCancel"
  >
    <el-form
      size="small"
      label-width="120px"
      :model="form"
    >
      <el-form-item label="机构大图">
        <drag-image :limit="1" />
      </el-form-item>
      <el-form-item label="机构全称">
        <el-input />
      </el-form-item>
      <el-form-item label="机构简称">
        <el-input />
      </el-form-item>
      <el-form-item label="所属行业">
        <el-input />
      </el-form-item>
      <el-form-item label="机构证件号">
        <el-input />
      </el-form-item>
      <el-form-item label="联系地址">
        <el-input />
      </el-form-item>
      <el-form-item label="机构证件照">
        <drag-image :limit="1" />
      </el-form-item>
      <el-form-item label="微信地址">
        <el-input />
      </el-form-item>
    </el-form>
    <div
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        size="small"
        @click="onCancel"
      >取 消</el-button>
      <el-button
        type="primary"
        size="small"
        @click="onSubmit"
      >确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import DragImage from "@/components/DragImage/index"
export default {
  components: {
    DragImage
  },
  props: {
    operateType: {
      type: String,
      default: 'edit'
    },
    visible: {
      type: Boolean,
      default: true
    },
    onOk: {
      type: Function, // 成功的回调
      default: () => { }
    },
    onCancel: {
      type: Function, // 关闭窗口的回调
      default: () => { }
    },
    formData: {
      type: Object,
      default: () => {
        return {
          avatar: '',
          name: '',
          phone: "",
          wechat: "",
          description: "",
          job: ""
        }
      }
    }
  },
  computed: {
    dialogVisible() {
      return this.visible
    },
    form() {
      if (this.operateType === "add") {
        return {}
      }
      return { ...this.formData }
    },
    title() {
      return this.operateType === "add" ? "添加团队成员信息" : this.operateType === "edit" ? "编辑团队成员信息" : ""
    }
  },
  methods: {
    close() {
      this.onCancel()
    },
    add() {

    },
    edit() {

    },
    onSubmit() {
      if (this.operateType === "add") {
        this.add()
      }
      if (this.operateType === "edit") {
        this.edit()
      }
    },
    onUploadImageSuccess(res) {
      this.$set(this.form, "avatar", res.newFileName)
      this.$forceUpdate()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
