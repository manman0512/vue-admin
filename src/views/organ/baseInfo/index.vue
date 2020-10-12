<template>
  <el-form class="institution-form">
    <div class="base-info">
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
    </div>
  </el-form>
</template>
<script>
import DragImage from "@/components/DragImage"
export default {
  components: {
    DragImage
  }
}
</script>
 <style lang="scss" scoped>
</style>
