<template>
  <div>
    <h2>props默认Function中的this</h2>
    <button @click="clickLeft(ctx)">click me</button>
    <button @click="clickLeft1()">click me</button>
  </div>
</template>

<script>

export default {
  props: {
    clickLeft: {
      type: Function,
      default (ctx) {
        console.log(ctx.heh)
      }
    },
    clickLeft1: {
      type: Function,
      default () {
        console.log(this.heh)
      }
    }
  },
  data () {
    return {
      heh: 'heh',
      ctx: this // 保存实例
    }
  }
}
</script>

<style>

</style>
