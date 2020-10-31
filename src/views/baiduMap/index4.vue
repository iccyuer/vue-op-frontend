<template>
  <div class="baidu-index">
    <h2>baiduMap--BMapLib.InfoBox信息窗口</h2>
    <div id="container"></div>

  </div>
</template>

<script>
/* eslint-disable */
import '@/assets/js/BMapLib.InfoBox.js'
export default {
  data () {
    return {
      markInfo: [
        {
          point: { lng: '116.404', lat: '39.915' },
          name: '酒店1',
          star: 1
        },
        {
          point: { lng: '116.424', lat: '39.935' },
          name: '酒店2',
          star: 2
        },
        {
          point: { lng: '116.384', lat: '39.925' },
          name: '酒店3',
          star: 3
        }
      ]
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap () {
      let map = new BMap.Map('container') // 创建地图实例
      let point = new BMap.Point(116.404, 39.915) // 创建点坐标
      map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放

      // 编写自定义函数，创建标注
      const addMarker = (mark, index) => {
        // 创建图标对象
        let myIcon = new BMap.Icon(require('@/assets/map/blue_1.png'), new BMap.Size(59, 59), {
          // 指定定位位置。
          // 当标注显示在地图上时，其所指向的地理位置距离图标左上
          // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
          // 图标中央下端的尖角位置。
          // anchor: new BMap.Size(10, 25),
          // 设置图片偏移。
          // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
          // 需要指定大图的偏移位置，此做法与css sprites技术类似。
          // imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移
        })
        // 创建标注对象并添加到地图
        let point = new BMap.Point(mark.point.lng, mark.point.lat)
        let marker = new BMap.Marker(point, { icon: myIcon })

        let html = '<div class="info-tips">'
        for (let i = 0; i < mark.star; i ++) {
          html += `<img src="${require('@/assets/map/orange_1.png')}"/>`
        }
        html += '</div>'

        const InfoBox = new BMapLib.InfoBox(map, html, {
          offset: {
            height: 30
          },
          // enableAutoPan: true  // 加上报错，未知
        })

        InfoBox.addEventListener('mouseover', () => {
          marker.setIcon(new BMap.Icon(require('@/assets/map/orange_1.png'), new BMap.Size(59, 59)))    
          InfoBox.open(marker)
          // InfoBox.enableAutoPan()
        })

        marker.addEventListener('click', () => {
          marker.setIcon(new BMap.Icon(require('@/assets/map/orange_1.png'), new BMap.Size(59, 59)))
          InfoBox.open(marker)
        })

        marker.addEventListener('mouseover', () => {
          marker.setIcon(new BMap.Icon(require('@/assets/map/orange_1.png'), new BMap.Size(59, 59)))    
          InfoBox.open(marker)
          // InfoBox.enableAutoPan()
        })
        marker.addEventListener('mouseout', () => {
          marker.setIcon(new BMap.Icon(require('@/assets/map/blue_1.png'), new BMap.Size(59, 59)))
          InfoBox.close()
        })
        map.addOverlay(marker)
      }

      this.markInfo.forEach((mark, index) => {
        addMarker(mark, index)
      })
    }
  }
}
</script>

<style lang="scss">
#container {
  width: 600px;
  height: 600px;
}
.info-tips{
  background-color: white;
}
</style>
