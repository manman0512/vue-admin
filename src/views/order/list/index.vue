<template>
  <div>
    <pro-table
      :data="data"
      :columns="columns"
      :table-option="tableOption"
      :total="123"
      :page-size="45"
      :loading="loading"
      has-search
      :current-change="currentChange"
      @preview="preview"
    >
      <template v-slot:form>
        <el-select
          placeholder="订单分类"
          size="mini"
          value="all"
        >
          <el-option
            label="all"
            value="all"
          />
        </el-select>
        <el-select
          size="mini"
          value="all"
        >
          <el-option
            label="人气排名"
            value="all"
          />
        </el-select>
      </template>
      <template v-slot:index>
        <el-table-column
          align="center"
          label="序号"
          type="index"
          width="50"
          class-name="index-row"
        />
      </template>
    </pro-table>
  </div>
</template>

<script>
import ProTable from "@/components/ProTable/index"
export default {
  name: "Courselist",
  components: {
    ProTable
  },
  data() {
    return {
      loading: false,
      data: [{
        coverUrl: 'http://ltimg.123gobuy.cn/file/9ef3656dc67487f3260caf7c31600598',
        name: '第一节课',
        create_time: Date.now(),
        price: 900
      }],
      columns: [
        {
          label: "订单封面",
          name: "coverUrl",
          type: 'image'
        },
        {
          label: "订单名称",
          name: "name"
        },
        {
          label: "订单单价",
          name: 'price',
          type: "price"
        },
        {
          label: "创建时间",
          name: 'create_time',
          type: "timestamp"
        }
      ],
      tableOption: {
        label: '操作',
        width: '200',
        options: [
          { label: '查看', type: 'text', icon: 'el-icon-view', methods: 'preview' },
          { label: '编辑', type: 'text', icon: 'el-icon-edit', methods: 'edit' },
        ]
      }
    }
  },
  methods: {
    preview(row) {
      // 预览
      console.log(row)
      this.$router.push("/course/detail")
    },
    edit() {
      //  编辑
    },
    currentChange(currentPage) {
      console.log(currentPage)
      // 请求接口
    }
  }
}
</script>
<style lang="scss">
</style>
