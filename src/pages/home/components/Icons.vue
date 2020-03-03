<template>
  <div class="icons">
    <swiper v-if="swiperShow">
      <swiper-slide v-for="(page, index) of pages" :key='index'>
       <!--  <div class="icon">
          <div class="icon-img-wrapper">
            <img class="icon-img" src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" />
          </div>
          <p class="icon-desc">景点门票</p>
        </div> -->
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img-wrapper">
            <img class="icon-img" :src="item.imgUrl" alt="" />
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div class="icon" v-for="item of iconsList" :key="item.id">
      <div class="icon-img-wrapper">
        <img class="icon-img" :src="item.imgUrl" alt="">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconsList: Array
  },
  data () {
    return {
      swiperOption: {
        /* pagination: {
          el: '.swiper-pagination'
        },
        loop: true */
      }/* ,
      iconsList: [
        {
          id: '0001',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '0003',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
          desc: '酒店'
        },
        {
          id: '0004',
          imgUrl:
            'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
          desc: '机票'
        },
        {
          id: '0005',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '火车票'
        },
        {
          id: '0006',
          imgUrl:
            'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
          desc: '自由行'
        },
        {
          id: '0007',
          imgUrl:
            'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
          desc: '攻略'
        },
        {
          id: '0008',
          imgUrl:
            'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png',
          desc: '民宿客栈'
        },
        {
          id: '0009',
          imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
          desc: '火车票'
        },
        {
          id: '0010',
          imgUrl:
            'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
          desc: '自由行'
        },
        {
          id: '0011',
          imgUrl:
            'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
          desc: '攻略'
        }
      ] */
    }
  },
  computed: {
    swiperShow () {
      return this.iconsList.length > 0
    },
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';
.icons >>> .swiper-container
  height: 0
  overflow: hidden
  padding-bottom: 50%
.icons
  /* display: flex
  flex-wrap: wrap
  flex-shrink: 1 */
  margin-top: .1rem
  .icon
    width: 25%
    padding-bottom: 25%
    float: left
    height: 0
    overflow hidden
    position relative
    .icon-img-wrapper
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem
      .icon-img
        height: 100%
        display: block
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      color: $darkTextColor
      text-align: center
      ellipsis()
</style>
