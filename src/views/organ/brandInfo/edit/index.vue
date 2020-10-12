<template>
  <el-dialog
    :visible="visible"
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
          :list="[form.logo]"
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
        @click="onOk"
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
      type: Function,
      default: () => { }
    },
    onCancel: {
      type: Function,
      default: () => { }
    },
    formData: {
      type: Object,
      default: () => {
        return {
          logo: "",
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
      return { ...this.formData }
    }
  },
  methods: {
    close() {
      this.onCancel()
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
