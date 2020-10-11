<template>
  <div>
    <div v-for="(timeitem,timekey) in timeList" :key="timekey" class="time-picker-item">
      <el-time-picker
        is-range
        v-model="timeitem.time"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      ></el-time-picker>
      <span class="weeklist">
        <span
          v-for="(wekitem,wekkey) in weekList"
          :key="wekkey"
          :class="wekitem.label===timeitem.week?'checked':''"
          @click="checkWeek(wekkey,timekey,wekitem.label)"
        >{{wekitem.label}}</span>
      </span>
      <el-button @click="drop(key)" type="text">删除</el-button>
    </div>
    <el-button @click="add" type="text">新增时间段</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      weekList: [
        {
          label: "周日",
          checked: false,
        },
        {
          label: "周一",
          checked: false,
        },
        {
          label: "周二",
          checked: false,
        },
        {
          label: "周三",
          checked: false,
        },
        {
          label: "周四",
          checked: true,
        },
        {
          label: "周五",
          checked: false,
        },
        {
          label: "周六",
          checked: false,
        },
      ],
      timeList: [
        {
          time: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
          week: "周日",
        },
      ],
    }
  },
  methods: {
    add() {
      this.timeList.push({
        time: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        week: "周日",
      })
    },
    drop(key) {
      this.timeList.splice(key, 1)
    },
    checkWeek(weekkey, timekey, week) {
      console.log(weekkey, timekey, week)
      this.weekList = this.weekList.map((item, index) => {
        return {
          label: item.label,
          checked: weekkey === index,
        }
      })
      this.timeList = this.timeList.map((item, index) => {
        return {
          ...item,
          week: index === timekey ? week : item.week,
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.time-picker-item {
  margin: 10px 0;
}
.weeklist {
  display: inline-block;
  margin: 0 10px;

  & > span {
    display: inline-block;
    padding: 2px 8px;
    margin: 0 4px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
    line-height: 20px;
    &.checked {
      color: #fff;
      background-color: #409eff;
    }
  }
}
</style>