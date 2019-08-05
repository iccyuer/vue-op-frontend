<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :router="true"
    @select="handleSelect"
  >
    <template
      v-for="route in constantRouterMap"
    >
      <template v-if="!route.children">
        <el-menu-item :index="route.path" :key="route.path">{{ route.meta.title }}</el-menu-item>
      </template>
      <template v-else>
        <el-submenu :index="route.name" :key="route.name">
          <template slot="title">{{ route.meta.title }}</template>
          <template v-for="child in route.children">
            <el-menu-item :index="child.path" :key="child.path">{{ child.meta.title }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </template>
  </el-menu>
</template>

<script>
import { constantRouterMap } from '@/router/index'
export default {
  components: {
  },
  data () {
    return {
      constantRouterMap
    }
  },
  created () {
    // console.log('constRouter', constantRouterMap)
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style>
</style>
