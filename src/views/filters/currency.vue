<template>
  <div class="currency">
    <div>{{ num | currency('$', 2) }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 20
    }
  }
}
</script>

<style>

</style>
