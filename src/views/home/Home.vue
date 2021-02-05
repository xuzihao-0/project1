<template>
  <div>我是第一个页面
    {{banners}}
  </div>

</template>

<script>
import { getHomeMultidata } from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      console.log(res);
      this.banners = res.data.banner;
      this.recommends = res.data.recommend;
    });
  },
};
</script>


<style scoped>
</style>
