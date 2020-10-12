<template>
  <div class="pro-list">
    <div class="pro-list-toolbar">
      <div class="pro-list-toolbar-left">
        <span class="pro-list-header-title">{{ headerTitle }}</span>
      </div>
      <div class="pro-list-toolbar-right">
        <slot name="extra" />
      </div>
    </div>
    <div class="pro-list-container">
      <div
        v-for="(item,index) in dataSource"
        :key="index"
        class="pro-list-item"
      >
        <div class="pro-list-extra">
          <!-- <drag-image
            class="pro-list-extra-logo"
            :limit="1"
            :list="[item.logo]"
            width="72px"
            height="72px"
            :on-success="(res)=>onSuccess(res,item,index)"
          /> -->
          <img
            :src="item.logo"
            alt=""
            class="pro-list-extra-logo"
          >
        </div>
        <div class="pro-list-main">
          <div class="pro-list-main-title">
            <p>
              {{ item.title }}
            </p>
          </div>
          <div class="pro-list-main-descript">
            <p style="margin:5px 0;font-size:13px;">
              {{ item.descript }}
            </p>
          </div>
        </div>
        <div class="pro-list-item-action">
          <el-button
            v-for="(action,id) in actions"
            :key="id"
            :type="action.type"
            :icon="action.icon"
            size="mini"
            @click="handleButton(action.methods,item)"
          >
            {{ action.label }}
          </el-button>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [{
        title: '语雀的天空',
        descript: '这是语雀的天空',
        logo:
          'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      }, {
        title: '语雀的天空',
        descript: '这是语雀的天空',
        logo:
          'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      }]
    },
    headerTitle: {
      type: String,
      default: '标题'
    },
    actions: {
      type: Array,
      default: () => [
        /**
         * { label: string, type: string, icon: string, methods: string },
         */
      ]
    }
  },
  data() {
    return {
      logo: []
    }
  },
  computed: {
    dataSource() {
      return this.data.map((item, index) => {
        const obj = {
          title: item.title,
          id: index,
          logo: item.logo,
          descript: item.descript
        };
        return obj;
      });
    }
  },
  methods: {
    onSuccess(res, item, index) {
      console.log(res, item, index)
      this.$set(this.dataSource, index, { ...item, index, logo: res.newFileName })
      this.$forceUpdate();
    },
    handleButton(method, row) {
      this.$emit(method, row)
    },
  }
}
</script>
<style lang="scss" scoped>
.pro-list {
  padding: 5px;
  box-sizing: border-box;
  .pro-list-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    .pro-list-header-title {
      font-weight: bold;
    }
  }
  .pro-list-container {
    .pro-list-item {
      display: flex;
      justify-content: space-between;
      padding: 12px 5px;
      color: rgba(0, 0, 0, 0.85);
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, 0.02);
        transition: background-color 0.3s;
      }
      .pro-list-main {
        padding: 5px;
        flex: 1 1;
        .pro-list-main-title {
          display: flex;
          flex: 1 1;
          justify-content: flex-start;
          font-size: 15px;
        }
        .pro-list-main-descript {
          position: relative;
          display: flex;
          flex: 1 1;
          flex-direction: column;
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
        p {
          margin: 0;
        }
      }
      .pro-list-extra {
        align-self: center;
        .pro-list-extra-logo {
          vertical-align: middle;
          width: 72px;
          height: 72px;
          border-radius: 50%;
        }
      }
      .pro-list-item-action {
        align-self: center;
      }
    }
  }
}
</style>
