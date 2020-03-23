<template>
  <div class="infinite-wrapper">
    <ul :style="{transform: translateSit}" class="infinite-scroller-me">
      <li v-for="(item, index) in newsList" :key="index" class="item">
        <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'InfiniteRolling',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    speed: {
      type: Number,
      default: 0.5
    }
  },
  data () {
    return {
      newsList: [],
      wrap: null,
      scroller: null,
      wrapWidth: 0,
      scrollerWidth: 0,
      translateSit: 'translate3d(0px, 0px, 0px)'
    }
  },
  created () {
    this.newsList = this.list
  },
  mounted () {
    this.initSomething()
  },
  methods: {
    initSomething () {
      this.wrap = document.querySelector('.infinite-wrapper')
      this.scroller = document.querySelector('.infinite-scroller-me')
      this.wrapWidth = this.wrap.offsetWidth
      this.scrollerWidth = this.scroller.offsetWidth
      console.log(this.wrapWidth)
      console.log(this.scrollerWidth)
      if (this.scrollerWidth > this.wrapWidth) {
        // 长度超出，可以滚动
        this.newsList = this.newsList.concat(this.newsList)
        this.scroll()
      }
    },
    // 滚动
    scroll () {
      let translateX = this.getComputedTranslateX2(this.translateSit)
      if (Math.abs(translateX) >= this.scrollerWidth) {
        let offset = Math.abs(translateX) - this.scrollerWidth
        this.translateSit = 'translate3d(' + -offset + 'px, 0px, 0px)'
        // this.scroller.style = 'transform: translate3d(' + -offset + 'px, 0px, 0px);';
      } else {
        this.translateSit =
          'translate3d(' + (translateX - this.speed) + 'px, 0px, 0px)'
        // this.scroller.style = 'transform: translate3d(' + (translateX - this.speed) + 'px, 0px, 0px);';
      }
      window.requestAnimationFrame(() => {
        this.scroll()
      })
    },
    // 获取计算后的translateX
    getComputedTranslateX (dom) {
      let startX = 0
      let style = window.getComputedStyle
        ? window.getComputedStyle(dom, null)
        : null || dom.currentStyle
      let matrix = style['transform']
      if (matrix && matrix !== 'none') {
        startX = Number(matrix.replace(/matrix\(|\)/g, '').split(',')[4])
      }
      return startX
    },
    getComputedTranslateX2 (translateSit) {
      if (translateSit) {
        let startX = 0
        startX = Number(
          translateSit.replace(/translate3d\(|\)|px/g, '').split(',')[0]
        )
        return startX
      }
    }
  }
}
</script>

<style lang="scss">
  .infinite-wrapper {
    overflow-x: hidden;
    white-space: nowrap;
    .infinite-scroller-me {
      display: inline-block;
      margin: 0;
      padding: 0;
      .item {
        display: inline-block;
      }
    }
  }
</style>
