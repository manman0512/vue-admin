<template>
  <div class="brand-info">
    <pro-list
      :actions="actions"
      header-title="品牌产品信息"
      :data="listData"
      :render-item="renderItem"
      @delete="deleteRow"
      @edit="editRow"
    >
      <template slot-scope="scope">
        <pro-list-item
          :meta="{logo:scope.row.logo}"
          :title="scope.row.title"
        >
          <p>描述：{{ scope.row.description }}</p>
          <p>描述：{{ scope.row.description }}</p>
          <p>描述：{{ scope.row.description }}</p>
          <p>描述：{{ scope.row.description }}</p>
          <p>描述：{{ scope.row.description }}</p>
        </pro-list-item>
      </template>
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
      :operate-type="operateType"
    />
  </div>
</template>
<script>
import ProList from "@/components/ProList/index"
import ProListItem from "@/components/ProList/ProListItem/index"
console.log(ProList)
import EditModal from "./modal"
export default {
  name: "BrandInfo",
  components: {
    ProList,
    EditModal,
    ProListItem
  },
  data() {
    return {
      actions: [
        { label: '编辑', type: 'text', icon: 'el-icon-edit', methods: 'edit' },
        { label: '删除', type: 'text', icon: 'el-icon-delete', methods: 'delete' },
      ],
      visible: false,
      formData: {},
      operateType: "add",
      listData: [{
        title: '语雀的天空1',
        description: '这是语雀的天空1',
        logo:
          'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      }, {
        title: '语雀的天空2',
        description: '这是语雀的天空2',
        logo:
          'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      }],
      renderItem: (item) => {
        return <el-button>{item.title}</el-button>
      }
    }
  },
  methods: {
    add() {
      this.operateType = "add"
      this.formData = {}
      this.visible = true
    },
    deleteRow(item) {
      console.log(item)
    },
    editRow(item) {
      console.log(item)
      this.formData = { ...item }
      this.operateType = "edit"
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
