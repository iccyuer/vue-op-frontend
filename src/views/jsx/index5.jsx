import './styles/index5.scss'
export default {
  data () {
    return {
      className: 'bind',
      flag: true,
      url: require('@/assets/logo.png')
    }
  },
  methods: {
    click () {
      this.flag = !this.flag
    }
  },
  render () {
    return (
      <div class={ this.className }>
        <h2>class绑定</h2>
        <el-button onClick={ this.click }>click me</el-button>
        {/* 1. */}
        <span class={{ red: this.flag, gray: !this.flag }}>wahah</span>
        {/* 2.三目 */}
        <span class={ this.flag ? 'gray' : 'red' }>wahah</span>
        {/* 3.保留静态class */}
        <span class={ ['he', this.flag ? 'gray' : 'red']}>dsd</span>
        <h2>普通属性绑定</h2>
        <img src={ this.url } alt=""/>
        <h2>style绑定</h2>
        <div style={{ fontSize: this.flag ? '18px' : '28px' }}>dssss</div>
        <h2>ref</h2>
        <div ref="ref">toto</div>
        <el-button onClick={ () => { console.log(this.$refs['ref']) } }>click ref</el-button>
      </div>
    )
  }
}
