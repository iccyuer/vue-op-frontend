<script>
import head from './components/head.vue'
export default {
  data () {
    return {
      level: 1
    }
  },
  /*
    h为createElement,用来创建vNode
    h(tag[, VNodeData][, children])
      -tag:
        {String | Object | Function}
        一个 HTML 标签名、组件选项对象，或者
        resolve 了上述任何一种的一个 async 函数。必填项
      -VNodeData:
        {Object}
        一个与模板中属性对应的数据对象。可选。
      -children:
        {String | Array}
        子级虚拟节点 (VNodes)，由 `createElement()` 构建而成，
        也可以使用字符串来生成“文本虚拟节点”。可选。
  */
  render (h) {
    const title = h(
      'h2',
      {
        domProps: {
          innerHTML: '案例<br/>输入1-6,显示h1-h6'
        }
      }
    )
    const input = h(
      'input',
      {
        attrs: {
          value: this.level
        },
        on: {
          input: (e) => { this.level = Number(e.target.value) }
        }
      }
    )
    const content = h(
      head,
      {
        props: {
          level: this.level
        }
      },
      'dasd'
    )
    return (
      h('div', [title, input, content])
    )
  }
}
</script>

<style>

</style>
