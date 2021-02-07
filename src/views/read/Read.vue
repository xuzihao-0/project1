<template>
  <div id="article">
    <art-bar></art-bar>
    <el-container>
      <el-main>
        <div class="con">
          <el-row :gutter="20" v-for="item in 20 / 2" :key="item">
            <el-col :span="12" :offset="6">
              <div class="grid-content bg-purple">
                <!-- 嵌套一个a标签 -->
                <a href="">
                  <!-- <div class="ph">
                  <div class="ss">
                    <div class="sss"></div>
                  </div>
                  <img src="@/assets/img/666.jpg" alt="" />
                </div> -->
                </a>
              </div>
            </el-col>
            <!-- <el-col :span="6" :offset="1">
          <div class="grid-content bg-purple">

            <a href="">
              <div class="ph">
                <div class="ss">
                  <div class="sss"></div>
                </div>
                <img src="@/assets/img/666.jpg" alt="" />
              </div>
            </a>
          </div>
        </el-col> -->
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ArticleLi from "../home/childComps/ArticleLi";
export default {
  name: "read",
  components: {
    ArticleLi,
  },
};
</script>


<style scoped>
#article {
  margin-top: 100px;
  margin-bottom: 20px;
}
.con {
  background-color: #5f9ea0;
}
.el-row {
  margin-bottom: 35px;
  padding-top: 50px;
}
.el-col {
  border-radius: 4px;
  height: 100px;
}
/* .bg-purple-dark {
  background: #99a9bf;
} */
.bg-purple {
  background: #7070b3;
}
/* .bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;

  height: 100px;
}
.row-bg {
  padding: 10px 0;
  /* background-color: #f9fafc; */
}
.el-container {
  margin-top: 0;
  width: 100%;
  margin-bottom: 40px;
  background-color: #f3f4f5;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  /* 这是背景色 */

  color: #333;
  text-align: center;
  line-height: 160px;
}
.ph {
  height: 100%;
  widows: 50px;
}
.ss {
  width: 60%;
  height: 100%;
  background-color: antiquewhite;
  float: right;
  text-align: center;
}
.sss {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

img {
  display: block;
  height: 100%;
  width: 30%;
  margin-left: 0;
}
</style>

