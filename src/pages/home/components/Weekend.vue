<template>
  <div>
    <div class="recommend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">
            {{item.desc}}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array
    }
  },
  data () {
    return {
      /* recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://img1.qunarzz.com/sight/p0/1704/71/71a3d23c24494bd2a3.water.jpg_256x160_d5bc3624.jpg',
          title: '南浔古镇',
          desc:
            '水乡古镇九十九，不如南浔走一走'
        },
        {
          id: '0002',
          imgUrl: 'https://img1.qunarzz.com/sight/p0/1607/21/2142167d4b1bfa84b4.water.jpg_256x160_ea65b4f7.jpg',
          title: '西塘古镇',
          desc:
            '水墨西塘让你感受古镇千年的诗情画意'
        },
        {
          id: '0003',
          imgUrl:
            'https://img1.qunarzz.com/sight/p0/1412/d9/d05d5ad16bdeacce9fefe61dce751f0d.water.jpg_256x160_1e8c749e.jpg',
          title: '普陀风景区',
          desc:
            '海天佛国 观音道场 ——普陀山'
        }
      ] */
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  line-height: .8rem
  background: #eeeeee
  text-index: .2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 38%
  .item-img
    width: 100%
.item-info
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
</style>
