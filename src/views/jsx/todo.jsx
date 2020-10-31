// 引入组件,无需注册直接使用
import item from './components/item.jsx'
export default {
  name: 'Todo',
  data () {
    return {
      list: [
        { p1: 1, p2: 4 },
        { p1: 3, p2: 6 },
        { p1: 5, p2: 7 }
      ],
      tableData: [
        { date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-03', name: '王小虎2', address: '上海市普陀区金沙江路 1510 弄' },
        { date: '2016-05-04', name: '王小虎3', address: '上海市普陀区金沙江路 1515 弄' }
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
    const tableSlots = {
      scopedSlots: {
        default: props => {
          return props.row.name + 'hah'
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
        <h2>el-table中的slot使用</h2>
        <el-table
          data={ this.tableData }
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            label="name"
            {...tableSlots}
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>
    )
  }
}
