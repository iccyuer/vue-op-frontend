<template>
  <div class="rolling">
    <infinite-rolling :list="list" :speed="0.1">
      <template slot-scope="props">
        <span v-text="props.item"></span>
      </template>
    </infinite-rolling>
  </div>
</template>

<script>
import InfiniteRolling from './components/InfiniteRolling'
export default {
  components: {
    InfiniteRolling
  },
  data () {
    return {
      list: ['1234567890', '!!!', 'abcdefg', 'hello', 999999, '231312312', '2312312312312312']
    }
  }
}
</script>

<style lang="scss">
  .rolling {
    .infinite-wrapper {
      li {
        padding: 0 10px;
      }
    }
  }
</style>
