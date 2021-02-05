<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>
<script>

import NavBar from './components/common/NavBar'
export default {
  name: "app",
  components:{
    NavBar
  }
};
</script>


<style>
@import url('assets/css/normalize.css');

</style>
