<template>
<div>
  <div class="search">
    <input
      class="search-input"
      type="text"
      placeholder="输入城市名或拼音"
      v-model='keyword'
    >
  </div>
  <div class="searchContent" ref='search' v-show='keyword'>
    <ul>
      <li
        class="search-item border-bottom"
        v-for='(item, index) of list'
        :key='index'
        @click='handleClick (item.name)'
      >
        {{item.name}}
      </li>
      <li v-show='hasNoData'>
        没有找到匹配数据
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import Bs from 'better-scroll'
export default {
  name: 'CitySearch',
  props: ['cities'],
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        /* this.cities */
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            // console.log(value)
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bs(this.$refs.search)
  },
  methods: {
    handleClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search
  height: .72rem
  padding: 0 .1rem
  background: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: .62rem
    line-height: .62rem
    text-align: center
    padding: 0 .2rem
    border-radius: .06rem
    color: #666
.searchContent
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  z-index: 1
  background: #eeeeee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    color: #666
    background: #fff
</style>
