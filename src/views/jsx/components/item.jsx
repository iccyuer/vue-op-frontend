import './item.scss'
export default {
  name: 'Item',
  props: {
    raw: {
      type: Object,
      defalut () {
        return {}
      }
    }
  },
  computed: {
    result () {
      return this.raw.p1 + this.raw.p2
    }
  },
  created () {
    // console.log(this.$attrs)
  },
  render () {
    return (
      <div class="item">
        <div class="body">
          <div class="content">{ this.result }</div>
          <div class="right">
            {/* 子组件在定义slot时,无法默认指定slot内容 */}
            {/* 匿名插槽,无slot-scope */}
            { this.$slots.default }
            {/* 匿名插槽，有slot-scope(匿名插槽可以出现多次) */}
            { this.$scopedSlots.default() }
            {/* 具名插槽,right为插槽名,参数即为slot-scope */}
            { this.$scopedSlots.right({ text: this.raw }) }
          </div>
        </div>
      </div>
    )
  }
}
