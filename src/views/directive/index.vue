<template>
  <div class="diective-index">
    <h2>自定义指令 v-number</h2>
    <div>只允许输入数字</div>
    <input type="text" v-model="input1" v-number="input1">
    <div>{{ input1 }}</div>
  </div>
</template>

<script>
import number from '@/directives/number/number'
export default {
  directives: {
    number
  },
  data () {
    return {
      input1: ''
    }
  }
}
</script>

<style lang="scss">

</style>
