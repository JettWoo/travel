<template>
  <div class="detail">
    <banner
    :sightName='sightName'
    :bannerImg='bannerImg'
    :gallaryImgs='gallaryImgs'></banner>
    <detail-header></detail-header>
    <detail-list :list='list'></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [] /* [{
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
      }] */
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  methods: {
    getDetailInfo () {
      /*  axios.get('/api/detail.json?id=' + this.$route.params.id)
        .then(this.handleGetDataSucc)
        .catch((err) => {
          console.log(err)
        }) */
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        console.log('dara:', data)
        this.sightName = data.sightName
        console.log(this.sightName)
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        console.log('this', this.gallaryImgs)
        this.list = data.categoryList
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.content
  height: 50rem
</style>
