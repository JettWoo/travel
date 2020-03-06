<template>
  <div class="detail">
    <banner></banner>
    <detail-header></detail-header>
    <detail-list :list='list'></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票-某一连锁店销售'
          }]
        }, {
          title: '成人伍馆联票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '儿童票'
      }, {
        title: '儿童票'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
.content
  height: 50rem
</style>
