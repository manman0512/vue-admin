<template>
  <Container
    v-loading="loading"
    class="pro-table"
  >
    <el-form
      v-if="hasSearch"
      inline
    >
      <el-input
        v-model="keywords"
        style="width:200px"
        size="mini"
        placeholder="输入关键字搜索"
      />
      <slot name="form" />
    </el-form>
    <el-table :data="tableData">
      <slot name="index" />
      <el-table-column
        v-for="(item,index) in columns"
        :key="index"
        :label="item.label"
        :prop="item.name"
        :fixed="item.fixed"
        :width="item.width?item.width:'auto'"
      >
        <template slot-scope="scope">
          <span v-if="item.render"> {{ item.render(scope.row) }} </span>
          <img
            v-else-if="item.type==='image'"
            class="el-table-img"
            :src="scope.row[item.name]"
          >
          <span v-else-if="item.type==='timestamp'">{{ getTime(scope.row[item.name]) }}</span>
          <span v-else-if="item.type==='price'">{{ getMoney(scope.row[item.name]) }}</span>
          <span v-else>{{ scope.row[item.name] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="tableOption.label"
        :width="tableOption.width"
        :label="tableOption.label"
        align="center"
        fixed="right"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(item,index) in tableOption.options"
            :key="index"
            :type="item.type"
            :icon="item.icon"
            size="mini"
            @click="handleButton(item.methods,scope.row)"
          >
            {{ item.label }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="float:right;padding: 10px 0px;'"
      background
      layout="prev, pager, next"
      :total="total"
      small
      :page-count="pageCount"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
    />

  </Container>
</template>
<script>
import Container from "@/components/Container/index"
import { timestampToTime } from "@/utils/index"
import { getMoney, filterData } from "./uilts/index"
export default {
  components: {
    Container
  },
  props: {
    hasSearch: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => [{
        name: null,
        label: null,
        width: null,
        render: null
      }]
    },
    tableOption: {
      type: Object,
      default: () => {
        return {}
      }
    },
    loading: {
      type: Boolean,
      default: false
    },

    pageCount: {
      type: Number,
      default: 7
    },
    total: {
      type: Number,
      default: null
    },
    pageSize: {
      type: Number,
      default: null
    },
    currentChange: {
      type: Function,
      default: () => { }
    }
  },
  data() {
    return {
      keywords: ''
    }
  },
  computed: {
    tableData() {
      return this.hasSearch ? filterData(this.data, this.keywords) : this.data
    }
  },
  methods: {
    getTime(value) {
      return timestampToTime(value)
    },
    getMoney(value) {
      return getMoney(value)
    },
    handleButton(method, row) {
      this.$emit(method, row)
    },
    handleCurrentChange(val) {
      this.$emit('current-change', val)
    }
  }
}
</script>
<style lang="scss" scoped>
.pro-table {
  .el-table-img {
    height: 40px;
    vertical-align: middle;
  }
}
</style>
<style lang="scss" >
.pro-table {
  .el-table td,
  .el-table th {
    padding: 5px 0;
  }
  .el-table thead {
    color: rgba(0, 0, 0, 0.65);
  }
  .index-row {
    // & > div > div {
    //   background-color: #979797;
    //   color: #fff;
    //   font-size: 12px;
    //   line-height: 18px;
    //   border-radius: 9px;
    //   width: 18px;
    //   height: 18px;
    //   text-align: center;
    // }
  }
}
</style>
