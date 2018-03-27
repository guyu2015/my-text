<template>
  <div id="app">
    <div class="header">
      <div class="pic"></div>
      <span class="address">北京常营</span>
      <div class="search"></div>
    </div>
    <mt-navbar v-model="selected" >
      <mt-tab-item  v-for="(item , index) in items"  :id=index>{{item.message}}</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item v-for="item in idArray"  :id="item">
        <mt-cell v-for="n in 10" :title="n" />
      </mt-tab-container-item>
    </mt-tab-container>
    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: 'App',
    data(){
     return {
       selected: '1',
       items: [
         { message: "热卖" },
         { message: '水果' },
         { message: '蔬菜' },
         { message: '肉蛋' },
         { message: '零食' },
         { message: '乳品' },
         { message: '酒饮' },
         { message: '熟食' }
       ],
       idArray:["0","1","2","3","4","5","6","7","8"]
     }
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .header{
    width: 100%;
    height: 40px;
  }
  .pic{
    display: inline-block;
    width: 20%;
    height: 18px;
    margin-left: 20%;
    vertical-align: bottom;
    background-image: url("./assets/header.png");
    background-size: 100% 100%;

  }
  .address{
    display: inline-block;
    width: 30%;
    height: 15px;
    line-height: 40px;
    font-size: 15px;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #ff4891;
    color: #333;
    margin-bottom: -3px;
  }
  .mint-navbar .mint-tab-item {
    padding: 13px 0;
    font-size: 15px;
  }
</style>
