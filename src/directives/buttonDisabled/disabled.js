const directive = {
  bind (el, { value }, vnode) {
    // vnode.componentInstance.disabled = true // 报警告
  },
  inserted (el, { value }, vnode) {
    console.log(el)
    console.log(el.style)
    // el.setAttribute('disabled', true)
    console.log(el)
    console.log(vnode)
    // vnode.elm.disabled = true
  },
  componentUpdated (el, { value }, vnode) {
  }
}

export default directive
