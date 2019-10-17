<template>
  <div>
    <h2>checkbox删除数据</h2>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >
    全选
    </el-checkbox>
    <el-checkbox-group v-model="checkedList" @change="handleCheckedListChange">
      <el-checkbox v-for="(item, index) in list" :label="item" :key="index">{{ item.data }}</el-checkbox>
    </el-checkbox-group>
    <button @click=remove>移除</button>
  </div>
</template>

<script>
import aa from './mixins/a'
console.log(aa)
import('./mixins/a').then(res => {
  console.log('res', res.default)
})
export default {
  data () {
    return {
      checkAll: false,
      isIndeterminate: false,
      list: [{ data: 1 }, { data: 2 }, { data: 3 }, { data: 4 }],
      // list: [1, 2, 3, 4],
      checkedList: []
    }
  },
  mixins: [aa],
  created () {
    console.log(this)
    this.$options.mixins.push(aa)
    this.hehe()
  },
  methods: {
    remove () {
      this.list = this.list.filter((item1) => {
        return this.checkedList.every((item2) => {
          return item2.data !== item1.data
        })
      })
      this.checkedList = []
    },
    handleCheckAllChange (val) {
      this.checkedList = val ? this.list : []
      this.isIndeterminate = false
    },
    handleCheckedListChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.list.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.list.length
    },
    getLabels (node) {
      if (node.parent) {
        this.getLabels(node.parent)
      }
      this.labels += node.label + '/'
    }
  }
}
</script>

<style>
</style>
