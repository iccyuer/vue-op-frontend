<script>
export default {
  data () {
    return {
      list: [
        { name: 'hah', age: 20 },
        { name: 'hah2', age: 20 },
        { name: 'hah3', age: 201 }
      ]
    }
  },
  render (h) {
    const list = h(
      'div',
      this.list.map((val) => {
        return h('div', val.name + '--' + val.age)
      })
    )
    return h(
      'div', [<h2>map循环</h2>, list]
    )
  }
}
</script>

<style>

</style>
