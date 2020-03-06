<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <span class="iconfont iconfanhui"></span>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style='opacityStyle'
    >
      景点详情
      <router-link to='/'>
        <span class="iconfont iconfanhui header-back"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      // console.log(document.documentElement.scrollTop)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  border-radius: .4rem
  background: rgba(0, 0, 0, 0.8)
  display: flex
  justify-content: center
  align-items: center
  .iconfont
    color: #fff
    font-size: .4rem
.header-fixed
  overflow: hidden
  position: fixed
  top: 0
  left: 0
  right: 0
  height: .86rem
  line-height: .86rem
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  z-index: 2
  .header-back
    font-size: .4rem
    float: left
    margin-left: .2rem
    color: #fff
</style>
