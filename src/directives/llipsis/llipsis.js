const sizeChange = (el) => {
  let width = el.clientWidth
  console.log('width', width)
}

const directive = {
  inserted (el, { value }, vnode) {
    // console.log('el', el)
    // console.log('value', value)
    // console.log('vnode', vnode)
    console.log('el', el)

    window.onresize = () => {
      sizeChange(el)
    }
  },
  componentUpdated (el, { value }, vnode) {
    console.log('el', el)
  }
}

export default directive
