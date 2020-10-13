<template>
  <el-form class="institution-form">
    <!-- <el-divider content-position="left">基本信息</el-divider> -->
    <div class="base-info">
      <pro-descript
        title="基本信息"
        label-width="120"
      >
        <pro-descript-item label-width="120">
          {{ info.name }}
        </pro-descript-item>
        <pro-descript-item label="机构地址:">
          {{ info.name }}
        </pro-descript-item>
        <template v-slot:extra>
          <el-button
            size="mini"
            type="primary"
          >
            添加
          </el-button>
        </template>
      </pro-descript>
    </div>
    <edit-modal
      :visible="visible"
      :on-cancel="onCancel"
      :form-data="formData"
      :operate-type="operateType"
    />
  </el-form>
</template>
<script>
import EditModal from "./modal"
import ProDescript from "@/components/ProDescription"
import ProDescriptItem from "@/components/ProDescription/Item"
export default {
  components: {
    EditModal,
    ProDescript,
    ProDescriptItem
  },
  data() {
    return {
      visible: false,
      info: {
        name: 'amm',
        address: "张江高科"
      }
    }
  }
}
</script>
 <style lang="scss" scoped>
</style>
