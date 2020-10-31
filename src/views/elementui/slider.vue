<template>
  <div>
    <el-slider
    v-model="value"
    range
    :max="180"
    @change="handleChange"
    ></el-slider>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: [1, 20]
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
