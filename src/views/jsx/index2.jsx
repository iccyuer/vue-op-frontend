
export default {
  functional: false,
  data () {
    return {
      list: [
        { name: 'lisa', age: 10 },
        { name: 'lisa2', age: 20 },
        { name: 'lisa3', age: 30 },
        { name: 'lisa4', age: 40 }
      ]
    }
  },
  methods: {
  },
  render () {
    return (
      <div id="footer">
        <h2>list</h2>
        {/* 使用map循环 */}
        { this.list.map((val) => {
          if (val.age >= 20) {
            return (
              <div>
                <span>{ val.name }</span> -- <span>{ val.age }</span>
              </div>
            )
          }
        }) }
      </div>
    )
  }
}
