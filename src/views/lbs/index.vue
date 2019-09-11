<template>
  <div>
    <div>lat: {{ lat }}</div>
    <div>lng: {{ lng }}</div>
    <div>{{ res }}</div>
  </div>
</template>

<script>
/*
  ios需处在https环境下
  ios/android需得到用户同意才可以获取定位
  可在设置--隐私--定位服务(获取地理位置)开启
*/
import axios from 'axios'
export default {
  data () {
    return {
      lat: '',
      lng: '',
      res: ''
    }
  },
  created () {
    this.getLocation()
  },
  // ak=wVTPtet3h7OGeqZaKLTfOYqpmr2zf7OZ&callback=renderReverse&location=39.927583299999995,116.44323340000001&output=json&pois=1
  methods: {
    getLocation () {
      if (navigator.geolocation1) {
        navigator.geolocation.getCurrentPosition((pos) => {
          this.lat = pos.coords.latitude
          this.lng = pos.coords.longitude
          axios.get('baidumap/geocoder/v2/', {
            params: {
              ak: 'wVTPtet3h7OGeqZaKLTfOYqpmr2zf7OZ',
              // callback: 'renderReverse',
              location: `${this.lat},${this.lng}`,
              output: 'json',
              pois: 1
            }
          })
            .then(res => {
              console.log('res', res)
              this.res = res.data.result.formatted_address
            })
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
          可采取百度地图，或者公开的接口(存在跨域问题)
          搜狐IP地址查询接口（默认GBK）：http://pv.sohu.com/cityjson
          搜狐IP地址查询接口（可设置编码）：http://pv.sohu.com/cityjson?ie=utf-8
          然后根据IP获取定位
          新浪的IP地址查询接口：http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=xxx.xxx.xxx.xxx
          淘宝的IP地址查询接口：http://ip.taobao.com/service/getIpInfo.php?ip=xxx.xxx.xxx.xxx
          太平洋IP地址库API接口：http://whois.pconline.com.cn/ipJson.jsp?ip=xxx.xxx.xxx.xxx&json=true
        */
        axios.get('baidumap/location/ip', {
          params: {
            ip: '119.90.25.242',
            ak: 'wVTPtet3h7OGeqZaKLTfOYqpmr2zf7OZ'
          }
        })
          .then(res => {
            console.log('res', res)
            this.res = res
          })
      }
    }
  }
}
</script>

<style>

</style>
