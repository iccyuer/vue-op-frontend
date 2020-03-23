<template>
  <div>
    {{ width }}
  </div>
</template>

<script>
import EventBus from './EventBus.js'
console.log('EventBus2', EventBus)
export default {
  inject: ['width'],
  created () {
    this.$vbus.$on('comm', (val) => {
      console.log(val)
    })
    // EventBus.$on('comm', (val) => {
    //   console.log('new', val)
    // })
  }
}
</script>

<style>

</style>
