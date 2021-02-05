<template>
  <div id="app">
    <nav-bar></nav-bar>
    <carousel></carousel>
    <br><br><br><br><br><br><br><br><br>
    <router-view></router-view>
  </div>
</template>
<script>

import Carousel from './components/common/Carousel '
import NavBar from './components/common/NavBar'

export default {
  name: "app",
  components:{
    NavBar,
    Carousel


  }
};
</script>


<style>
@import url('assets/css/normalize.css');

</style>
