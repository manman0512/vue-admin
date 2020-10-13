<template>
  <div class="pro-list-item-content">
    <div
      v-if="meta.logo"
      class="pro-list-extra"
    >
      <img
        :src="meta.logo"
        alt=""
        class="pro-list-extra-logo"
      >
    </div>
    <div class="pro-list-main">
      <div
        v-if="title"
        class="pro-list-main-title"
      >
        <p>
          {{ title }}
        </p>
      </div>
      <div class="pro-list-main-descript">
        <div
          class="pro-list-main-descript"
          style="margin:5px 0;font-size:13px;"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProListItem",
  props: {
    title: {
      type: String,
      default: '标题'
    },
    meta: {
      type: Object,
      default: () => ({
        logo: ""
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.pro-list-item-content {
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
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
      margin: 2px;
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
</style>
