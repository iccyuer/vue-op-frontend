<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  render (h) {
    const title = h(
      'h2',
      'v-if'
    )
    // if/else
    let show = ''
    if (this.num % 2 === 0) {
      show = h('span', '偶数')
    } else {
      show = h('span', '奇数')
    }
    // 三目
    const pe = this.num % 2 === 0 ? h('span', '偶数') : show = h('span', '奇数')
    return h('div', [title, show, pe])
  }
}
</script>

<style>

</style>
