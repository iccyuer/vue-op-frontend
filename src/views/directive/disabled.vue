<template>
  <el-button  v-disabled type="primary" @click="handleClick">click</el-button>
</template>

<script>
// import number from '@/directives/number/number'
import disabled from '@/directives/buttonDisabled/disabled.js'
export default {
  directives: {
    disabled
  },
  methods: {
    handleClick () {
      alert(1)
    }
  }
}
</script>

<style>

</style>
