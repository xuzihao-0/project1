<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="2"
        ><div class="grid-content bg-purple">
          <el-carousel :interval="5000" arrow="always" height="300px">
            <el-carousel-item v-for="item in 4" :key="item">

                <div class="img1">
                  <img src="@/assets/img/1.jpg" alt="">
                </div>


            </el-carousel-item>
          </el-carousel>
        </div></el-col
      >
    </el-row>
  </div>
</template>
<script>
export default {
  name: "carousel",
  data (){
    return {
      item: "hrlllo"
    }
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}



.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img1{
  width:100%;
  height: 100%;

}
img{
  width:100%;


}

</style>


