<template>
  <el-card class="main-content-container">
    <slot />
  </el-card>
</template>
<script>
export default {};
</script>
<style lang="scss">
.main-content-container {
  margin: 5px;
  padding: 5px;
  height: 100%;
  &.el-card {
    height: 100%;
  }

  .el-card__body {
    padding: 0px;
    height: 100%;
  }
}
</style>
