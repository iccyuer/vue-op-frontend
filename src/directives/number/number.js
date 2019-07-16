const directive = {
  inserted (el, { value }, vnode) {
    // console.log('el', el)
    // console.log('value', value)
    // console.log('vnode', vnode)
  },
  componentUpdated (el, { value }, vnode) {
    value = value.replace(/[^\d.]/g, '')
    value = value.replace(/^\./g, '')
    value = value.replace(/\.{2,}/g, '.')
    value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
    value = value.replace(/^(-)*(\d+)\.(\d{2}).*$/, '$1$2.$3')
    vnode.data.directives.some((val) => {
      if (val.rawName === 'v-model') {
        vnode.context[val.expression] = value
        return true
      }
    })
  }
}

export default directive
