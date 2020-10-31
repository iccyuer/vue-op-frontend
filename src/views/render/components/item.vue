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
      子组件在定义slot时,可通过条件渲染定义默认slot
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
            this.$scopedSlots.header ? this.$scopedSlots.header({ text: this.total }) : h('span', '123')
          ]
        )
      ]
    )
  }
}
</script>

<style>

</style>
