<template>
    <div id="home">
      <mt-swipe :auto="3000" style="height: 250px" class="swipe">
        <mt-swipe-item v-for="(img,index) in imgs" :key="index" >
          <img :src="img"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
  import fetch from '@/utils/fetch'

    export default {
        name: "home",
        data(){
          return{
            imgs:[]
          }
        },
      created() {
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
</script>

<style scoped>
.swipe img{
  width: 100%;
  height: 250px;
  margin: 0px;
  padding: 0px;
}


</style>
