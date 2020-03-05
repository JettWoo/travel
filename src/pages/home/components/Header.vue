<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont iconfanhui back-icon"></span>
    </div>
    <div class="header-input">
      <span class="iconfont iconsousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
      <!-- 城市 -->
      {{this.$store.state.city}}
      <span class="iconfont iconjiantouarrow486 arrow-icon"></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  height: .86rem
  display: flex
  align-items: center
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      display: block
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    background: #fff
    height: .64rem
    line-height .64rem
    color: #ccc
    margin-left: .2rem
    border-radius: .1rem
    padding-left: .2rem
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      font-size: .24rem
</style>
