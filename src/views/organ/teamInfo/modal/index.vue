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
      <el-form-item label="成员头像:">
        <drag-image
          :limit="1"
          :list="form.avatar?[form.avatar]:[]"
          width="84px"
          height="84px"
          :on-success="onUploadImageSuccess"
        />
      </el-form-item>
      <el-form-item label="成员姓名:">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="成员职位:">
        <el-input v-model="form.job" />
      </el-form-item>
      <el-form-item label="成员描述:">
        <el-input
          v-model="form.description"
          type="textarea"
          :autosize="{minRows:3}"
        />
      </el-form-item>
      <el-form-item label="联系手机:">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="联系微信:">
        <el-input v-model="form.wechat" />
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
