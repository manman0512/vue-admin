<template>
  <div>
    <div class="pro-descript-item">
      <div class="pro-descript-item-label">{{ label }}</div>
      <div class="pro-descript-item-descript">
        <slot />
      </div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    style: {
      type: Object,
      default: () => ({})
    }
  },
}
</script>
<style lang="scss" scoped>
.pro-descript-item {
  display: flex;
  align-items: center;
  &-label {
    padding: 8px 15px;
    text-align: right;
  }
  &-descript {
    flex: 1 1;
  }
}
</style>
