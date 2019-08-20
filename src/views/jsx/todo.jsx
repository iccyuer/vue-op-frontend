// 引入组件,无需注册直接使用
import item from './components/item.jsx'
export default {
  data () {
    return {
      list: [
        { p1: 1, p2: 4 },
        { p1: 3, p2: 6 },
        { p1: 5, p2: 7 }
      ]
    }
  },
  render () {
    const slots = {
      scopedSlots: {
        right: props => {
          return <span>{ props.text.p1 }</span>
        }
      }
    }
    return (
      <div>
        <h2>父子组件(slot使用)</h2>
        {
          this.list.map((val) => {
            return (
              <item
                // props
                raw={ val }
                // 插入slots
                {...slots}
              >
                default slot
              </item>
            )
          })
        }
      </div>
    )
  }
}
