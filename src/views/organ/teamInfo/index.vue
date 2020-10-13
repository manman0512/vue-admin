<template>
  <div class="team-info">
    <pro-list
      :actions="actions"
      header-title="团队成员信息"
      :data="listData"
      :render-item="renderItem"
      @delete="deleteRow"
      @edit="editRow"
    >
      <template slot-scope="scope">
        <pro-list-item
          :meta="{logo:scope.row.avatar}"
          :title="scope.row.name"
        >
          <p>成员职位：{{ scope.row.job }}</p>
          <p>成员描述：{{ scope.row.description }}</p>
          <p>联系手机：{{ scope.row.phone }}</p>
          <p>联系微信：{{ scope.row.wechat }}</p>
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
import EditModal from "./modal/index"
export default {
  name: "TeamInfo",
  components: {
    ProList,
    ProListItem,
    EditModal
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
        name: '温蒂',
        job: '前端开发',
        description: "来自沙溪",
        phone: "1234566444",
        wechat: "545454",
        avatar:
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
