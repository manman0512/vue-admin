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
      <el-form-item label="品牌产品LOGO:">
        <drag-image
          :limit="1"
          :list="form.logo?[form.logo]:[]"
          width="84px"
          height="84px"
        />
      </el-form-item>
      <el-form-item label="品牌产品名称:">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="品牌产品介绍:">
        <el-input
          v-model="form.descript"
          type="textarea"
          :autosize="{minRows:3}"
        />
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
          logo: '',
          title: ''
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
      return this.operateType === "add" ? "添加产品品牌信息" : this.operateType === "edit" ? "编辑产品品牌信息" : ""
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
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
