<script>
import fn from './components/fn.vue'
export default {
  // 函数式组件(无状态data,无实例this)
  functional: true,
  props: {
    pe: {
      type: Object,
      default () { return { name: 'pe' } }
    }
  },
  // 为了弥补缺少的实例,提供第二个参数作为上下文
  render (h, context) {
    return h('div', [<h2>函数式组件</h2>, context.props.pe.name, h(fn, 'default')])
  }
}
</script>

<style>

</style>
