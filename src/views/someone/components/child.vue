<template>
  <div>
    <button @click="clickLeft(ctx)">click me</button>
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
