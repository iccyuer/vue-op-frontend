<template>
    <div>
        <h2 v-for="(item, index) in list" :key="index" @click="handleClick(item)">{{ item.name }}</h2>
        <hr>
        <h3 v-for="(item, index) in list2" :key="index+'1'" @click="handleClick2(item)">{{ item.name }}</h3>
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { name: 'hello' },
        { name: 'hello2' },
        { name: 'hello3' }
      ],
      list2: []
    }
  },
  created () {
    this.list2 = this.list
  },
  methods: {
    handleClick (item) {
      item.name = 'new'
      console.log('list', this.list)
    },
    handleClick2 (item) {
      item.name = Math.random()
      console.log('list', this.list2)
    }
  }
}
</script>

<style>

</style>
