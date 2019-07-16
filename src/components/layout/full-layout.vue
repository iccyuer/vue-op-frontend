<template>
  <div>
    <op-header></op-header>
    <router-view/>
  </div>
</template>

<script>
import opHeader from '@/components/header/header.vue'
export default {
  components: {
    opHeader
  }
}
</script>

<style>

</style>
