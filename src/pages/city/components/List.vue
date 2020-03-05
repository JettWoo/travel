<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper" v-for='item of hot' :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for='(item, key) of cities'
        :key='key'
        :ref='key'
        >
        <div class="title border-topbottom" >
          {{key}}
        </div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bs from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: {
      type: Array
    },
    cities: {
      type: Object
    },
    letter: String
  },
  mounted () {
    this.scroll = new Bs(this.$refs.wrapper)
  },
  watch: {
    letter (newValue, oldValue) {
      // console.log('newValue:', newValue)
      if (this.letter) {
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.border-topbottom
  &:before
    border-color: #aaa
  &:after
    border-color: #aaa
.border-topbottom
  &:before
    border-color: #ccc
.list
  position: absolute;
  top: 1.58rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
.title
  line-height: .54rem
  background: #eeeeee
  padding-left: .26rem
  color: #666
.button-list
  padding: .1rem .6rem .1rem .1rem
  overflow: hidden
  .button-wrapper
    float: left
    width: 33.33%
    .button
      padding: .1rem 0
      text-align: center
      margin: .1rem
      border: .02rem solid #ccc
      border-radius: .06rem
.item-list
  .item
    line-height: .76rem
    padding-left: .2rem
</style>
