<template>
  <div>
    <div>lat: {{ lat }}</div>
    <div>lng: {{ lng }}</div>
  </div>
</template>

<script>
/*
  ios需处在https环境下
  ios/android需得到用户同意才可以获取定位
  可在设置--隐私--定位服务(获取地理位置)开启
*/
export default {
  data () {
    return {
      lat: '',
      lng: ''
    }
  },
  created () {
    this.getLocation()
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          this.lat = pos.coords.latitude
          this.lng = pos.coords.longitude
          console.log('经度：' + pos.coords.longitude)
          console.log('维度：' + pos.coords.latitude)
          console.log('海拔：' + pos.coords.altitude)
          console.log('时间戳：' + pos.coords.timestamp)
          console.log('速度：' + pos.coords.speed)
        }, (err) => {
          console.log('错误码：' + err.code)
          console.log('错误信息' + err.message)
          alert(err.message)
        })
      } else {
        /*
          不支持geolocation时或者用户拒绝权限时,可选取ip定位，ip定位只能精确度到市
          可采取百度地图，或者公开的接口
          搜狐IP地址查询接口（默认GBK）：http://pv.sohu.com/cityjson
          搜狐IP地址查询接口（可设置编码）：http://pv.sohu.com/cityjson?ie=utf-8
          然后根据IP获取定位
          新浪的IP地址查询接口：http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=xxx.xxx.xxx.xxx
          淘宝的IP地址查询接口：http://ip.taobao.com/service/getIpInfo.php?ip=xxx.xxx.xxx.xxx
          太平洋IP地址库API接口：http://whois.pconline.com.cn/ipJson.jsp?ip=xxx.xxx.xxx.xxx&json=true
        */
      }
    }
  }
}
</script>

<style>

</style>
