<template>
  <div id="home">
    <article-li></article-li>
    <qa></qa>
  </div>

</template>

<script>
import ArticleLi from './childComps/ArticleLi';
import Qa from './childComps/Qa'

export default {
  name: "Home",
  components:{
    ArticleLi,
    Qa

  }

};
</script>


<style scoped>

</style>
