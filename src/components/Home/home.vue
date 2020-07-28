<template>
    <div id="home">
      <!--轮播图-->
      <mt-swipe :auto="3000" style="height: 250px" class="swipe">
        <mt-swipe-item v-for="(img,index) in imgs" :key="index" >
          <img :src="img"/>
        </mt-swipe-item>
      </mt-swipe>
      <div  class="home-list">
        <ul>
          <li v-for="(grid,index) in grids" :key="grid.id">
            <router-link :to="grid.router">
              <img :src="grid.src" alt="">
            </router-link>
            <p>{{grid.title}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import fetch from '@/utils/fetch'

export default {
    name: "home",
    data(){
      return{
        imgs:[],
        grids:[
          {id:1,src:"../../../static/1.png",title:"新闻资讯",router:{name:"news.list"}},
          {id:2,src:"../../../static/2.png",title:"图文分享",router:{name:"news.list"}},
          {id:3,src:"../../../static/3.png",title:"商品展示",router:{name:"news.list"}},
          {id:4,src:"../../../static/4.png",title:"咨询",router:{name:"news.list"}},
          {id:5,src:"../../../static/5.png",title:"留言反馈",router:{name:"news.list"}},
          {id:6,src:"../../../static/6.png",title:"联系我们",router:{name:"news.list"}}
        ]
      }
    },
  created() {
    this.fetchLunbo()
  },
  methods:{
    fetchLunbo(){
      fetch({
        url: '/api/vue/lunbo',
        method: 'get'
      }).then(resp=>{
        this.imgs=resp.data.data
      }).catch(err=>{
        console.log("请求轮播异常")
      })
    }
  }
}
</script>

<style scoped>
.swipe img{
  width: 100%;
  height: 250px;
  margin: 0px;
  padding: 0px;
}
  .home-list{
    width: 100%;
  }
  .home-list ul{
    display: flex;
    flex-wrap:wrap;
  }
  .home-list ul li{
    width: 33%;
    height: 100px;
    text-align: center;
    font-size: 14px;
    margin-top: 47px;
  }
 .home-list ul li a{
   display: inline-block;
   width: 50px;height: 50px;
   margin: 0 auto;
 }
  .home-list ul  li a img{
    width: 50px;
  }
  #home{
    background-color: #f6f6f6;
  }

</style>
