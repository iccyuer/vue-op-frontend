<script>
import item from './components/item.vue'
export default {
  data () {
    return {
      list: [
        { price: 19.88, num: 2 },
        { price: 42.67, num: 3 },
        { price: 243.10, num: 6 }
      ]
    }
  },
  render (h) {
    const items = h('div', this.list.map((val) => {
      return h(
        item,
        {
          props: {
            item: val
          },
          scopedSlots: {

          }
        },
        'default slots'
      )
    }))
    return h('div', [items])
  }
}
</script>

<style>

</style>
