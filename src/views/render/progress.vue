<template>
  <div>
    <h2> 对el-progress添加label名称的封装 </h2>
    <label-progress :list="list">
      <template v-slot:label="{ data }">
        <span>slotScope重写label名称{{ data.label }}</span>
      </template>
    </label-progress>
  </div>
</template>

<script>
import LabelProgress from './components/LabelProgress'
export default {
  components: {
    LabelProgress
  },
  data () {
    /*
      label: progress的名称,
      支持所有el-progressprops属性，如color...
    */
    return {
      list: [
        { label: 'hah', percentage: 50, color: 'red' },
        { label: 'cv', percentage: 60 },
        { label: 'vcs', percentage: 70, color: 'orange' },
        { label: 'df', percentage: 80, type: 'dashboard' }
      ]
    }
  }
}
</script>

<style>

</style>
