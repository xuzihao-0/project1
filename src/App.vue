<template>
  <div id="app">
    <nav-bar></nav-bar>
    <carousel></carousel>
    <!-- <Card></Card> -->

    <router-view></router-view>
  </div>
</template>
<script>
import Card from './components/common/Card';

import Carousel from './components/common/Carousel '
import NavBar from './components/common/NavBar'


export default {
  name: "app",
  components:{
    NavBar,
    Carousel,
    Card


  }
};
</script>



<style>
@import url('assets/css/normalize.css');



</style>
