<template>
  <div class="baidu-index">
    <h2>baiduMap--线路/周边</h2>
    <button @click="searchLine(0)">驾车</button>
    <button @click="searchLine(1)">公交</button>
    <button @click="searchLine(2)">骑行</button>
    <button @click="searchLine(3)">步行</button>
    <br />
    <button @click="searchNearBy">搜索周边</button>
    <div id="panelWay"></div>
    <div id="localSearch"></div>
    <div id="container"></div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      map: {},
      start: new BMap.Point(116.404, 39.915),
      end: new BMap.Point(116.444, 39.934)
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let map = new BMap.Map("container"); // 创建地图实例
      let point = new BMap.Point(116.404, 39.915); // 创建点坐标
      map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

      this.map = map;

      // 添加标注
      let marker = new BMap.Marker(point); // 创建标注(红点)
      map.addOverlay(marker); // 添加覆盖物
    },
    // 查询周边
    searchNearBy() {
      this.mapStatus = "1";
      this.map.clearOverlays();
      // 搜索半径图
      const circle = new BMap.Circle(new BMap.Point(116.404, 39.915), 1000, {
        fillColor:"blue",
        strokeWeight: 1,
        fillOpacity: 0.3,
        strokeOpacity: 0.3
      })
      this.map.addOverlay(circle)
      let localSearch = new BMap.LocalSearch(this.map, {
        // 地图渲染搜索结果
        renderOptions: {
          map: this.map,
          autoViewport: false
          // panel: 'localSearch'
        },
        // 搜索结果数据
        onSearchComplete(results) {
          console.log(results)
          // 判断状态是否正确
          if (localSearch.getStatus() == BMAP_STATUS_SUCCESS) {
            const s = []
            for (let i = 0; i < results.getCurrentNumPois(); i++) {
              // s.push(results.getPoi(i));
              let distance = calculateDistance(39.915, 116.404, results.getPoi(i).point.lat, results.getPoi(i).point.lng)
              s.push({ name: results.getPoi(i).title, distance })
            }
            console.log(s)
          }
        },
        pageCapacity: 100 // 搜索结果显示数量(最大50)
      })
      let calculateDistance = (lat1, lng1, lat2, lng2) => {
        let radLat1 = (lat1 * Math.PI) / 180.0
        let radLat2 = (lat2 * Math.PI) / 180.0
        let a = radLat1 - radLat2
        let b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0
        let s =
          2 *
          Math.asin(
            Math.sqrt(
              Math.pow(Math.sin(a / 2), 2) +
                Math.cos(radLat1) *
                  Math.cos(radLat2) *
                  Math.pow(Math.sin(b / 2), 2)
            )
          )
        s = s * 6378.137 // EARTH_RADIUS
        s = Math.round(s * 10000) / 10000
        return s
      }
      localSearch.searchNearby("超市", new BMap.Point(116.404, 39.915), 10000);
    },
    // 查询路线
    searchLine(type) {
      this.map.clearOverlays()
      switch (type) {
        case 0:
          let driving = new BMap.DrivingRoute(this.map, {
            renderOptions: {
              map: this.map,
              autoViewport: true,
              panel: "panelWay"
            }
          });
          driving.search(this.start, this.end)
          break
        case 1:
          let transit = new BMap.TransitRoute(this.map, {
            renderOptions: {
              map: this.map,
              autoViewport: true,
              panel: "panelWay"
            }
          })
          transit.search(this.start, this.end)
          break
        case 2:
          let riding = new BMap.RidingRoute(this.map, {
            renderOptions: {
              map: this.map,
              autoViewport: true,
              panel: "panelWay"
            }
          })
          riding.search(this.start, this.end)
          break
        case 3:
          let walking = new BMap.WalkingRoute(this.map, {
            renderOptions: {
              map: this.map,
              autoViewport: true,
              panel: "panelWay"
            }
          })
          walking.search(this.start, this.end)
          break
      }
    }
  }
}
</script>

<style lang="scss">
#container {
  height: 600px;
}
</style>
