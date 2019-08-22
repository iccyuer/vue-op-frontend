<script>
export default {
  methods: {
    click (param) {
      console.log(param)
    },
    mousemove (param) {
      console.log(param)
    }
  },
  render (h) {
    /*
      事件监听器在 `on` 属性内,
      带参数使用箭头函数
      nativeOn用在组件上，用于监听原生事件
    */
    const click = h(
      'div',
      {
        on: {
          click: this.click,
          mousemove: () => { this.mousemove(2) }
        }
      },
      'click me'
    )
    const elTable = h(
      'el-table',
      {
        nativeOn: {
          click: () => { console.log(2) }
        }
      },
      'click me'
    )
    return h('div', [<h2>事件</h2>, click, elTable])
  }
}
</script>

<style>

</style>
