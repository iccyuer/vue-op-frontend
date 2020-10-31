<template>
  <div>
    <button @click="fetchGet">get</button>
    <button @click="fetchPost">post</button>
    <!-- <button @click="fetchTest2">test2</button>
    <button @click="fetchTest3">test3</button> -->
    <br/>
    <!-- <form method="POST" action="http://localhost:3000/user/info">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form> -->
    <button @click="fetchCookie">test cookie</button>
  </div>
</template>

<script>
import axios from 'axios'
import { testGet, testPost, test2, testCookie } from '@/api/index'
export default {
  methods: {
    fetchGet () {
      let params = {
        id: 2,
        name: 'heh'
      }
      testGet(params)
    },
    fetchPost () {
      // let params = {
      //   id: 3,
      //   name: 'hesdh'
      // }
      let formData = new FormData()
      formData.append('o', 23)
      formData.append('k', 'sda')
      testPost(formData)
    },
    fetchTest2 () {
      test2({
        url: location.href.split('#')[0]
      })
    },
    fetchTest3 () {
      axios.get('http://192.168.10.243:3000/dashi/wechat/get_web_access_token')
    },
    fetchCookie () {
      testCookie()
    }
  }
}
</script>

<style>

</style>
