<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <pro-list :actions="actions">
      <template v-slot:extra>
        <el-button
          size="mini"
          type="primary"
        >新建</el-button>
      </template>
    </pro-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProList from "@/components/ProList"
export default {
  name: 'Dashboard',
  components: {
    ProList
  },
  data() {
    return {
      actions: [
        { label: '删除', type: 'text', icon: 'el-icon-delete', methods: 'delete' },
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])

  },
}
</script>

<style lang="scss" scoped>
.dashboard {
}
</style>
