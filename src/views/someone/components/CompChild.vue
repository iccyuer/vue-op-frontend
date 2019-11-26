<template>
  <div>
    {{ width }}
  </div>
</template>

<script>
export default {
  inject: ['width'],
  created () {
    this.$vbus.$on('comm', (val) => {
      console.log(val)
    })
  }
}
</script>

<style>

</style>
