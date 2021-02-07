<template>
  <div id="home">
    <carousel></carousel>
    <article-li></article-li>
    <qa></qa>
    <card></card>
  </div>

</template>

<script>
import Card from '../../components/common/Card';
import Carousel from '../../components/common/Carousel ';
import ArticleLi from './childComps/ArticleLi';


import Qa from './childComps/Qa'

export default {
  name: "Home",
  components:{
    ArticleLi,
    Qa,
    Carousel,
    Card

  }

};
</script>


<style scoped>

</style>
