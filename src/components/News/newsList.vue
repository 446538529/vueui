<template>
    <div class="news">
      <div class="back">
        <button class="goback" @click="goback"><</button>
        <h2>新闻列表</h2>
      </div>
      <div class="newsList">
        <ul>
          <li v-for="(newsItem,index) in news " :key="newsItem.id" >
            <a class="news" href="#">
              <div class="news-img">
                <img :src="newsItem.src" alt=""/>
              </div>
              <div class="content">
                 <p class="title">{{newsItem.title|cutLongData}}</p>
                 <div class="news-desc">
                    <p class="summary">{{newsItem.summary|cutLongData}}</p>
                    <p class="tips">
                      <span class="praise">浏览：{{newsItem.votecount}}</span>
                      <span class="time">发表时间：{{newsItem.createTime|timeFormat}}</span>
                    </p>
                 </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import fetch from '@/utils/fetch'
    export default {
        name: "newsList",
        data(){
          return{
            news:[]
          }
        },
      created() {
        this.fetchNews()
        console.log(this.news)
      },
      methods:{
          fetchNews(){
            fetch({
              url:"/api/vue/news",
              method:"get"
            }).then(res=>{
              this.news=res.data.data;
              }).catch(err=>{
              console.log("请求新闻数据异常",err)
            })
          },
        goback(){
            this.$router.go(-1)
        }
      },
      filters:{
          cutLongData(data){
            if(data&&data.length>20){
              return data.substring(0,20)+"..."
            }
            return data
          },
          timeFormat(str){
            if (!str) return ''
            var date = new Date(str)
            var time = new Date().getTime() - date.getTime() //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
            if (time < 0) {
              return ''
            } else if ((time / 1000 < 30)) {
              return '刚刚'
            } else if (time / 1000 < 60) {
              return parseInt((time / 1000)) + '秒前'
            } else if ((time / 60000) < 60) {
              return parseInt((time / 60000)) + '分钟前'
            } else if ((time / 3600000) < 24) {
              return parseInt(time / 3600000) + '小时前'
            } else if ((time / 86400000) < 31) {
              return parseInt(time / 86400000) + '天前'
            } else if ((time / 2592000000) < 12) {
              return parseInt(time / 2592000000) + '月前'
            } else {
              return parseInt(time / 31536000000) + '年前'
            }
          }
      }

    }
</script>

<style scoped>
  .goback{
    float: left;
    margin-left: 50px;
    font-size: 15px;
    margin-top: 8px;
    width: 20px;
    background-color: deeppink;
  }
  .back{
    margin-top: 40px;
    text-align: center;
    margin-left: -20px;
  }
  .newsList{
    margin-bottom: 50px;
  }
  .news-img{
    width: 100px;
    height: 100px;
    margin: 10px;
    background-color: red;
    float: left;
  }
  .news-img img{
    width: 100px;
    height: 100px;
  }
  .content{
    padding: 10px;
  }
  .tips{
    font-size: 13px;
    color: deeppink;
  }
  .time{
    margin-left: 14px;
  }
  .summary{
    height: 40px;
    font-size: 13px;
    color: goldenrod;
    text-indent: 2em;
  }
  .newsList a:hover{
    background-color: darkgrey;
  }
  .title{
    text-align: left;
    color: black;
    font-family: 楷体;
    font-size: 20px;
    font-weight: bolder;
  }

</style>
