
export default {
  functional: false,
  data () {
    return {
      author: 'heh'
    }
  },
  methods: {
    click (para, para2, para3) {
      console.log('this', this)
      console.log('para', para)
      console.log('para2', para2)
      console.log('para3', para3)
      return function () { console.log(1) }
    }
  },
  render () {
    return (
      <div id="footer">
        <h2>事件</h2>
        {/* 1.事件:on-xx/onXx事件名可驼峰可横杠(默认参数事件event,自定义参数参考方式3/4) */}
        <span onClick={ this.click }> { this.author }</span>
        {/* 2.函数名() 这种方式运行到此时，直接执行了函数体 */}
        {/* <span onClick={ this.click() }> { this.author }</span> <br/> */}
        {/* 3.箭头函数,主动传入evnet */}
        <span onClick={ (e) => { this.click(e, 'otherParameter') } }> { this.author }</span>
        {/* 4.bind方式,隐式传入event，参数最后一位 */}
        <span onClick={ this.click.bind(this, 'p1', 'p2') }> { this.author }</span>
      </div>
    )
  }
}
