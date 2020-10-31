<template>
  <div>
    <h2>组件间通信</h2>
    <h4>1.provide/inject</h4>
    <p>
      父组件 provide 中提供变量，子组件 inject 中来注入，然后可以在子组件内部使用 provide 的变量 <br/>
      需要注意的是这里不论子组件有多深，只要调用了inject那么就可以注入provider中的数据。而不是局限于只能从当前父组件的prop属性来获取数据
    </p>
    <comp-child></comp-child>
    <h4>2.props</h4>
    <p>所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定</p>
    <h4>3.emit</h4>
    <p>$emit(子)，它可以被 v-on 侦听(父)</p>
    <h4>4.eventBus</h4>
    <button @click="handleClick">click me</button>
    <p>通过实例化一个全新的Vue对象,借助其$emit/$on特性实现事件总线</p>
    <h4>5.本地存储</h4>
    <p>cookie/LocalStorage/SessionStorage</p>
    <h4>6.状态库(vuex)</h4>
  </div>
</template>

<script>
import CompChild from './components/CompChild'
import EventBus from './components/EventBus.js'
console.log('EventBus1', EventBus)
export default {
  components: {
    CompChild
  },
  provide: {
    width: 300
  },
  methods: {
    handleClick () {
      // this.$vbus.$emit('comm', 123)
      EventBus.$emit('comm', 123)
    }
  }
}
</script>

<style>

</style>
