<script>
export default {
  props: {
    list: {
      type: Array,
      default () { return [] }
    }
  },
  render (h) {
    const label = (item) => {
      return h(
        'div',
        {
          class: 'label'
        },
        [this.$scopedSlots.label ? this.$scopedSlots.label({ data: item }) : h('span', item.label)]
      )
    }
    const elProcess = (item) => {
      return h(
        'el-progress',
        {
          props: { ...item }
        }
      )
    }
    const labelProcess = this.list.map((item, index) => {
      return h(
        'div',
        {
          class: 'label-process'
        },
        [label(item), elProcess(item)]
      )
    })
    return h('div', { class: 'label-process-container' }, [labelProcess])
  }
}
</script>

<style lang="scss">
  .label-process-container{
    .label-process{
      display: flex;
      display: -webkit-flex;
      .el-progress--line{
        flex-grow: 1
      }
    }
  }
</style>
