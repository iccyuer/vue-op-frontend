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
            default: props => h('span', props.text.price),
            header: props => h('span', props.text)
          }
        },
        'default slots'
      )
    }))
    return h('div', [<h2>slots</h2>, items])
  }
}
</script>

<style>

</style>
