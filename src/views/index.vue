<template>
  <div class="about">
    <op-header></op-header>
    <h1>This is an index page</h1>
  </div>
</template>

<script>
import opHeader from '@/components/header/header.vue'
export default {
  components: {
    opHeader
  },
  created () {
    console.log(process.env)
  }
}
</script>
