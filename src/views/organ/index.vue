<template>
  <Container class="organ-page">
    <el-tabs tab-position="left">
      <el-tab-pane label="机构基本信息">
        <base-info />
      </el-tab-pane>
      <el-tab-pane label="机构服务信息">
        <server-info />
      </el-tab-pane>
      <el-tab-pane label="品牌产品信息">
        <brand-info />
      </el-tab-pane>
      <el-tab-pane label="团队成员信息">定时任务补偿</el-tab-pane>
      <el-tab-pane label="联系人信息">定时任务补偿</el-tab-pane>
      <el-tab-pane label="财务账号信息">定时任务补偿</el-tab-pane>
    </el-tabs>
  </Container>
</template>
<script>
import Container from "@/components/Container"
import BaseInfo from "./baseInfo/index"
import ServerInfo from "./serveInfo/index"
import BrandInfo from "./brandInfo/index"
export default {
  name: "OrganIndex",
  components: {
    Container,
    BaseInfo,
    ServerInfo,
    BrandInfo
  }
}
</script>
<style lang="scss" scoped>
</style>
