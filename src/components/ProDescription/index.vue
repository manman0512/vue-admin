<template>
  <Container>
    <div class="pro-descript">
      <div class="pro-descript-header">
        <h4
          v-show="title"
          class="pro-descript-header-title"
        >{{ title }}</h4>
        <slot name="extra" />
      </div>
      <div class="pro-descript-body">
        <slot />
      </div>
    </div>
  </Container>
</template>
<script>
import Container from "@/components/Container"
export default {
  name: "ProDescription",
  components: {
    Container
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
}
</script>
<style lang="scss" scoped>
.pro-descript {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-title {
      margin: 10px 0;
    }
  }
  &-item {
    &-label {
    }
  }
}
</style>
<style lang="scss" >
.pro-descript-item-label {
}
</style>
