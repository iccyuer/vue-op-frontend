<template>
  <div class="llipsis">
    <p class="article" v-llipsis>
      I should have stopped you? Hah! I should have stopped myself!
      I should have stopped you? Hah! I should have stopped myself!
      I should have stopped you? Hah! I should have stopped myself!
      I should have stopped you? Hah! I should have stopped myself!
      I should have stopped you? Hah! I should have stopped myself!
      I should have stopped you? Hah! I should have stopped myself!
    </p>
  </div>
</template>

<script>
import llipsis from '@/directives/llipsis/llipsis'
export default {
  directives: {
    llipsis
  },
  beforeDestroy () {
    window.onresize = null
  }
}
</script>

<style lang='scss'>
  .llipsis{
    .article{
      line-height: 25px;
      height: 75px;
      overflow: hidden;
      text-align: left;
      text-indent: 2em;
      position: relative;
      // text-overflow: ellipsis;
    }
    .article:after{
      content: '......';
      display: inline-block;
      position: absolute;
      width: auto;
      height: 25px;
      bottom: 0;
      right: 0;
      background-color: white;
      text-align: left;
      text-indent: 0;
    }
  }
</style>
