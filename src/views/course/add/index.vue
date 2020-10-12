<template>
  <Container>
    <div class="course-add">
      <el-form
        size="small"
        label-width="150px"
      >
        <el-form-item label="课程名称:">
          <el-input />
        </el-form-item>
        <el-form-item label="课程封面:">
          <UploadSingleImg />
        </el-form-item>
        <el-form-item label="课程分类:">
          <el-select />
        </el-form-item>
        <el-form-item label="课程类型:">
          <el-radio-group>
            <el-radio :label="3">系列课程</el-radio>
            <el-radio :label="6">单词课程</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="预约结束时间:">
          <el-select />
        </el-form-item>
        <el-form-item
          label="课程详情:"
          style="width:100%"
        >
          <tinymce
            v-model="content"
            :height="300"
          />
        </el-form-item>
        <el-form-item label="开课日期:">
          <el-date-picker
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
        <el-form-item
          label="上课时间段:"
          style="width:100%"
        >
          <time-picker />
        </el-form-item>
        <el-form-item label="授课类型:">
          <el-radio-group>
            <el-radio :label="3">线上授课</el-radio>
            <el-radio :label="6">线下活动</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="上课地点:"
          style="width:100%"
        >
          <div class="amap-wrapper">
            <el-amap-search-box
              class="search-box"
              :search-option="searchOption"
              :on-search-result="onSearchResult"
              :events="searchEvent"
            />
            <el-amap
              class="amap-box"
              vid="map"
              :zoom="zoom"
              :center="center"
              :plugin="plugin"
              :amap-manager="amapManager"
            >
              <el-amap-marker
                vid="marker"
                :position="center"
              />
            </el-amap>
          </div>
        </el-form-item>
        <el-form-item label="授课模式">
          <el-radio-group>
            <el-radio :label="3">音频直播</el-radio>
            <el-radio :label="6">音频录播</el-radio>
            <el-radio :label="3">视频直播</el-radio>
            <el-radio :label="6">视频录播</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="课程老师:">
          <el-button>选择老师</el-button>
        </el-form-item>
        <el-form-item label="课程原价:">
          <el-input />
        </el-form-item>
        <el-form-item label="课程价格:">
          <el-input />
        </el-form-item>
        <el-form-item label="学员容量:">
          <el-input />
        </el-form-item>
        <el-form-item label="课程状态:">
          <el-input />
        </el-form-item>
      </el-form>
    </div>
  </Container>
</template>
<script>
import Container from "@/components/Container"
import UploadSingleImg from "@/components/UploadSingleImg"
import Tinymce from "@/components/Tinymce"
import { AMapManager } from "vue-amap"
import TimePicker from "@/components/TimePicker"
export default {
  components: {
    Container,
    UploadSingleImg,
    Tinymce,
    TimePicker,
  },
  data() {
    const vm = this
    const amapManager = new AMapManager()
    return {
      content: "",
      province: "上海",
      info: {
        title: "",
      },
      zoom: 16,
      center: [121.59996, 31.197646],
      amapManager,
      markers: [],
      searchOption: {
        city: "上海", // 根据输入的省份定位范围
        citylimit: false,
      },
      searchEvent: {
        // 搜索事件
        init({ autoComplete, placeSearch }) {
          placeSearch.search(vm.province, (status, res) => {
            if (res && res.poiList) {
              // 搜索后确定地址定位
              const { lng, lat } = res.poiList.pois[0].location
              vm.center = [lng, lat]
            }
          })
        },
      },
      plugin: [
        {
          pName: "Geolocation", // 定位插件
          showMarker: false,
          events: {
            init(o) {
              // 定位成功 自动将marker和circle移到定位点
              o.getCurrentPosition((status, result) => {
                // console.log(result);
                vm.center = [result.position.lng, result.position.lat]
              })
            },
          },
        },
      ],
    }
  },
  mounted() {
    const searchBtn = document.getElementsByClassName("search-btn")[0]
    const searchInp = document.getElementsByClassName("search-box-wrapper")[0]
    searchBtn.style.fontWeight = "bold"
    // 搜索框占位文字
    searchInp.children[0].placeholder = "输入地址"
    searchInp.children[0].style.width = "100%"
    this.inp = searchInp.children[0]
  },
  methods: {
    onSearchResult(pois) {
      this.center = [pois[0].lng, pois[0].lat]
      this.form.lon = pois[0].lng
      this.form.lat = pois[0].lat
    },
  },
}
</script>
<style lang="scss" >
.course-add {
  .el-form-item {
    margin-bottom: 20px;
    width: 700px;
  }
  .amap-wrapper {
    height: 500px;
    width: 100%;
  }
  .el-vue-amap-container {
    height: calc(100% - 55px);
    margin-top: 10px;
  }
}
</style>

