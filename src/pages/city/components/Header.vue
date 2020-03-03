<template>
  <div class="header">
    <router-link to='/'>
      <span class="iconfont iconfanhui header-back"></span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.header
  overflow: hidden
  height: .86rem
  line-height: .86rem
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-back
    font-size: .4rem
    float: left
    margin-left: .2rem
    color: #fff
</style>
