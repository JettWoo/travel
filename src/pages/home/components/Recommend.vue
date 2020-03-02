<template>
  <div>
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">
            {{item.desc}}
          </p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/35aeadcb-1ad8-4ee1-a135-2f8b63b744cb.jpg_r_480x320x90_e9d80e84.jpg',
          title: '杭州-重庆 4天自由行',
          desc:
            '重庆+市中心希尔顿4日休闲自由行（五星双飞+长江索道+千年古镇）送两江夜游'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/p/tts7/1809/7b/544c382e3b5a9902.jpg_r_480x320x90_299e432b.jpg',
          title: '杭州-巴厘岛 6天跟团游',
          desc:
            '新春火爆预售！巴厘岛5/6天，蓝梦贝妮岛双岛畅玩+乌布皇宫+送浮潜+漂流'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/vs_ceph_vs_tts/046e826a-0ae6-4f40-8c2d-3747bdbfef2f.jpg_r_480x320x90_2eec1f98.jpg',
          title: '杭州当地游 3天跟团游',
          desc:
            '杭州+乌镇+西塘纯玩3日游，慢慢悠悠，夜宿乌镇，升2晚5星，享50高餐标'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  margin-top: .2rem
  line-height: .8rem
  background: #eeeeee
  text-index: .2rem
.item
  display: flex
  height: 1.9rem
  overflow hidden
  align-items: center
  width: 100%
  .item-img
    width: 2.4rem
    height: 1.6rem
    padding: .1rem
  .item-info
    flex: 1
    min-width: 0
    /* width: 4.7rem */
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      width: 100%
      ellipsis()
    .item-button
      background: #ff9300
      margin-top: .2rem
      color: #ffffff
      line-height: .44rem
      padding: 0 .1rem
      border-radius: .06rem
</style>
