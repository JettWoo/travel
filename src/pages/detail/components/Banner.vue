<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont icontupian"></span> 39</div>
      </div>
    </div>
    <fade>
      <common-gallary
        :imgs='gallaryImgs'
        v-show="showGallary"
        @close='handleClose'></common-gallary>
    </fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
  name: 'Banner',
  props: ['sightName', 'bannerImg', 'gallaryImgs'],
  components: {
    CommonGallary,
    Fade
  },
  data () {
    return {
      showGallary: false
      /* imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'] */
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang='stylus' scoped>
.banner
  overflow: hidden
  height: 0
  padding-bottom: 55%
  position: relative
  .banner-img
    width: 100%
  .banner-info
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    display: flex
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      padding: 0 .4rem
      height: .32rem
      line-height: .32rem
      font-size: .24rem
      background: rgba(0, 0, 0, .8)
      border-radius: .2rem
      margin-top: .14rem
      vertical-align: middle
      .iconfont
        font-size: .28rem
</style>
