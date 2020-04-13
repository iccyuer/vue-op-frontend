<template>
    <div>
        <h2 v-for="(item, index) in list" :key="index" @click="handleClick(item)">{{ item.name }}</h2>
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
      ]
    }
  },
  methods: {
    handleClick (item) {
      item.name = 'new'
      console.log('list', this.list)
    }
  }
}
</script>

<style>

</style>
