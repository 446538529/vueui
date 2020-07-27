<template>
  <div id="app">
    <mt-header title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/3.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/4.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="shopCar">
        <img slot="icon" src="./assets/2.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="./assets/1.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      selected:''
    }
  },
  watch:{
    selected:function (newV,oldV) {
      console.log(newV);
      this.$route.push({name:this.selected});
    }  
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
;
}

</style>
