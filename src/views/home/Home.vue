<template>
  <div id="home">
    <carousel></carousel>
    <art-bar @btnclick="ss"></art-bar>
    <article-li :tl="['流行', '新款']"></article-li>
    <qa></qa>
    <card></card>
  </div>

</template>

<script>
import ArtBar from '../../components/common/ArtBar.vue';
import Card from '../../components/common/Card';
import Carousel from '../../components/common/Carousel';

import ArticleLi from './childComps/ArticleLi';


import Qa from './childComps/Qa'

export default {
  name: "Home",
  data(){
    return {
      currentIndex :0,
      qq:['first','two','three']
    }
  },
  components:{
    ArticleLi,
    Qa,
    
    Card,
    ArtBar,
    Carousel

  },
  methods:{
    ss(index){
      console.log(index);
      this.currentIndex = index;
      console.log(this.currentIndex);
      // console.log(qq[this.currentIndex]);


    }
  }

};
</script>


<style scoped>

</style>
