<template>
  <div class="container" ref="container">
      <span>{{msg}}</span>
      <button :class="{active: isActive}"  @click="handle">change msg</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello',
      isActive: true
    }
  },
  mounted () {
    console.log(this.$refs['container'])
    console.log(this._render())
    console.log(this._parse())
  },
  methods: {
    handle () {
      this.msg = 'hell o'
    }
  }
}
</script>

<style>

</style>
