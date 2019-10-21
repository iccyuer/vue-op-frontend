<template>
  <div class="subway">
    <div
      :class="['subway-item', { 'active-subway': activeSubway === index }]"
      v-for="(subway, index) in data"
      :key="subway.id"
      @click="handleClick(index)"
    >
      <div class="circle">
        <span class="point"></span>
      </div>
      <span class="content">{{ subway.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subway',
  props: {
    data: {
      type: Array,
      default () {
        return [
          { name: '天通苑北', id: 0 },
          { name: '天通苑', id: 1 },
          { name: '天通苑南', id: 2 },
          { name: '立水桥', id: 3 },
          { name: '立水桥南', id: 4 },
          { name: '北苑路北', id: 5 },
          { name: '大屯路东', id: 6 },
          { name: '惠新西街北口', id: 7 },
          { name: '惠新西街南口', id: 8 },
          { name: '和平西桥', id: 9 },
          { name: '和平里北街', id: 10 },
          { name: '雍和宫', id: 11 },
          { name: '北新桥', id: 12 },
          { name: '张自忠路', id: 13 },
          { name: '东四', id: 14 },
          { name: '灯市口', id: 15 },
          { name: '东单', id: 16 },
          { name: '崇文门', id: 17 },
          { name: '磁器口', id: 18 },
          { name: '天坛东门', id: 19 },
          { name: '蒲黄榆', id: 20 },
          { name: '刘家窑', id: 21 },
          { name: '宋家庄', id: 22 }
        ]
      }
    }
  },
  data () {
    return {
      activeSubway: -1
    }
  },
  methods: {
    handleClick (index) {
      this.activeSubway = index
      this.$emit('handle-item', this.data[index])
    }
  }
}
</script>

<style lang="scss">
  .subway{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    .subway-item{
      display: flex;
      flex-direction:column;
      cursor: pointer;

      .circle{
        display: flex;
        align-items: center;

        .point{
          width: 15px;
          height: 15px;
          border: 1px solid rgba(10, 218, 138, 0.836);
          border-radius: 50%;
        }
      }

      .circle:before{
        content: '';
        display: inline-block;
        height: 5px;
        background-color: aqua;
        flex-grow: 1;
        // border-top-left-radius: 1px;
        // border-bottom-left-radius: 1px;
      }

      .circle:after{
        content: '';
        display: inline-block;
        height: 5px;
        background-color: aqua;
        flex-grow: 1;
        // border-top-right-radius: 2px;
        // border-bottom-right-radius: 2px;
      }

      .content{
        padding: 10px 10px;
      }
    }

    .subway-item:first-child{
      .circle:before{
        background-color: transparent;
      }
    }

    .subway-item:last-child{
      .circle:after{
        background-color: transparent;
      }
    }

    .active-subway{
      .circle{
        .point{
          border: 2px solid red;
        }
      }

      .content{
        color: red;
      }
    }
  }
</style>
