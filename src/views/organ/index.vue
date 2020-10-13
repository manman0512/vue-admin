<template>
  <Container class="organ-page">
    <el-tabs tab-position="left">
      <el-tab-pane label="机构信息">
        <base-info />
      </el-tab-pane>
      <el-tab-pane label="品牌产品信息">
        <brand-info />
      </el-tab-pane>
      <el-tab-pane label="团队成员信息">
        <team-info />
      </el-tab-pane>
      <el-tab-pane label="联系人信息">定时任务补偿</el-tab-pane>
      <el-tab-pane label="财务账号信息">定时任务补偿</el-tab-pane>
    </el-tabs>
  </Container>
</template>
<script>
import Container from "@/components/Container"
import BaseInfo from "./baseInfo/index"
import BrandInfo from "./brandInfo/index"
import TeamInfo from "./teamInfo/index"
export default {
  name: "OrganIndex",
  components: {
    Container,
    BaseInfo,
    BrandInfo,
    TeamInfo
  }
}
</script>
<style lang="scss" scoped>
</style>
