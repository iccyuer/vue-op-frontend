export default {
  data () {
    return {
      name: 'hello'
    }
  },
  computed: {
    title () {
      return this.name + 'balal'
    }
  },
  render () {
    let pix = ''
    if (this.title.length >= 10) {
      pix = (
        <span>{ this.title }</span>
      )
    }
    return (
      <div>
        <h2>v-if</h2>
        {/* if/else */}
        { pix }
        {/* 三目 */}
        { this.title.length >= 10 ? <span>{ this.title }</span> : '' }
      </div>
    )
  }
}
