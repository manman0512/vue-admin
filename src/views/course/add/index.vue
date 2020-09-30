<template>
  <Container>
    <div class="course-add">
      <el-form size="small" label-width="150px">
        <el-form-item label="课程名称:">
          <el-input />
        </el-form-item>
      </el-form>
    </div>
  </Container>
</template>
<script>
import Container from "@/components/Container"
export default {
  components: {
    Container
  }
}
</script>
<style lang="scss" >
.course-add{
  width:500px;
  .el-form-item{
    margin-bottom:0;
  }
}
</style>

