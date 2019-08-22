<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    total () {
      return this.item.price * this.item.num
    }
  },
  render (h) {
    /*
      子组件在定义slot时,无法默认指定slot内容
    */
    return h(
      'div',
      {
        class: 'item'
      },
      [
        h('span', this.total),
        h(
          'span',
          {
            style: {
              marginLeft: '20px'
            }
          },
          [
            this.$slots.default,
            this.$scopedSlots.default({ text: this.item }),
            this.$scopedSlots.header({ text: this.total }, h('div', 'adas'))
          ]
        )
      ]
    )
  }
}
</script>

<style>

</style>
