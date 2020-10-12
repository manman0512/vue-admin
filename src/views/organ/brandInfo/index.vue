<template>
  <div class="brand-info">
    <pro-list
      :actions="actions"
      header-title="品牌产品信息"
      @delete="deleteRow"
      @edit="editRow"
    >
      <template v-slot:extra>
        <el-button
          size="mini"
          type="primary"
          @click="add"
        >添加</el-button>
      </template>
    </pro-list>
    <edit-modal
      :visible="visible"
      :on-cancel="onCancel"
      :form-data="formData"
    />
  </div>
</template>
<script>
import ProList from "@/components/ProList"
import EditModal from "./edit/index"
export default {
  name: "BrandInfo",
  components: {
    ProList,
    EditModal
  },
  data() {
    return {
      actions: [
        { label: '编辑', type: 'text', icon: 'el-icon-edit', methods: 'edit' },
        { label: '删除', type: 'text', icon: 'el-icon-delete', methods: 'delete' },
      ],
      visible: false,
      formData: {}
    }
  },
  methods: {
    add() {
      this.formData = {}
    },
    deleteRow(item) {
      console.log(item)
    },
    editRow(item) {
      console.log(item)
      this.formData = { ...item }
      this.visible = true
    },
    onCancel() {
      this.visible = false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
