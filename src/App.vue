<template>
  <div id="app">
    <nav-bar></nav-bar>
    <!-- <carousel></carousel> -->


    <router-view></router-view>
  </div>
</template>
<script>

import NavBar from './components/common/NavBar'


export default {
  name: "app",
  components:{
    NavBar,



  }
};
</script>



<style>
@import url('assets/css/normalize.css');
#app{
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}



</style>
