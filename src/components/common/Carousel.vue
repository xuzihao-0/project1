<template>
  <div id="carousel">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4"
        ><div class="grid-content bg-purple">
          <el-carousel :interval="5000" arrow="always" height="300px">
            <el-carousel-item v-for="item in 4" :key="item" >
              <div class="img1">
                <a href="">
                  <img src="@/assets/img/1.jpg" alt="" />
                </a>

              </div>
            </el-carousel-item>
            <!-- <el-carousel-item v-for="(item,index) in banners.list" :key="index">
              <div class="img1">
                <a :href="item.link">
                  <img :src="item.image" alt="" />
                </a>

              </div>
            </el-carousel-item> -->
          </el-carousel></div
      ></el-col>
    </el-row>


  </div>
</template>
//  :offset="2"
<script>
// import { getHomeMultidata } from "@/network/home";
export default {
  name: "carousel",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  // created() {
  //   getHomeMultidata().then((res) => {
  //     console.log(res);
  //     this.banners = res.data.banner;
  //     this.recommends = res.data.recommend;
  //   });
  // },
};
</script>
<style scoped>
#carousel{
  width: 98%;
  margin: 0 auto;
}


/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
} */

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.img1 {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>


