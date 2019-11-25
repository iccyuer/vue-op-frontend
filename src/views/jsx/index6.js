export default {
  data () {
    return {
      name: 'hello'
    }
  },
  render () {
    const wrap = (
      <div>
        <h2>wrap-wrap{ this.name }</h2>
      </div>
    )
    return (
      <div>
        <h2>jsx .js</h2>
        { wrap }
      </div>
    )
  }
}
