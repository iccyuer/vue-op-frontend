<script>
export default {
  functional: true,
  render (h, context) {
    return h('div', [context.slots().default, context.children])
  }
}
</script>

<style>

</style>
