<template>
  <div class="baidu-index">
    <h2>baiduMap--默认标注</h2>
    <div id="container"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {}
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      let map = new BMap.Map("container") // 创建地图实例
      let point = new BMap.Point(116.404, 39.915) // 创建点坐标
      map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放

      // 添加标注
      let marker = new BMap.Marker(point) // 创建标注(红点)
      let marker2 = new BMap.Marker(new BMap.Point(116.424, 39.915)) // 创建标注(红点)
      map.addOverlay(marker) // 添加覆盖物
      map.addOverlay(marker2) // 添加覆盖物2
    }
  }
};
</script>

<style lang="scss">
#container {
  height: 1000px;
}
</style>
