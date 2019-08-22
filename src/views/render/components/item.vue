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
          this.$slots.default
        )
      ]
    )
  }
}
</script>

<style>

</style>
