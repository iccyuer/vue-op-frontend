
export default {
  functional: false,
  data () {
    return {
      name: 'lalala'
    }
  },
  methods: {
  },
  render () {
    return (
      <div id="footer">
        <h2>v-model</h2>
        {/* v-model */}
        <input type="text" value={ this.name } onInput={ (e) => { this.name = e.target.value } }/>
        <div>{ this.name }</div>
      </div>
    )
  }
}
