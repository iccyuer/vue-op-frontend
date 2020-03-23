<template>
  <div>
    <h2>服务器打包测试</h2>
    <el-button type="primary" @click="buildTest">打包测试</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import io from 'socket.io-client'
export default {
  data () {
    return {
      socket: null
    }
  },
  created () {
    this.initSocket()
  },
  methods: {
    initSocket () {
      this.socket = io('ws://192.168.199.195:4006/web', {
        query: { id: 1 }
      })
      this.socket.on('web_build_result', data => {
        console.log('web_build_result', data)
      })
    },
    buildTest () {
      console.log(1)
      axios
        .get('/api/admintools/deploy/testBuild', {
          params: {
            agentID: 1,
            webID: 1
          }
        })
        .then(res => {
          console.log('res', res)
        })
    }
  }
}
</script>

<style>
</style>
