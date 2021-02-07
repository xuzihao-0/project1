<template>
  <div id="card">
    <div class="tl">
      <i class="el-icon-collection">好书推荐</i>

    </div>

    <el-row grid-content bg-purple-dark v-for="item in 3" :key="item">
      <el-col :span="4" :offset="6">
        <a href="">
          <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/img/1.jpg" class="image" />
          <div style="padding: 14px">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
        </a>
      </el-col>
      <el-col :span="4" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/img/33.jpg" class="image" />
          <div style="padding: 14px">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" >
        <el-card :body-style="{ padding: '0px' }">
          <img src="@/assets/img/33.jpg" class="image" />
          <div style="padding: 14px">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>

    </el-row>

  </div>
</template>

<style>
#card{
  background-color: #e9eef3;
  padding: 30px;
}
.el-icon-collection{
  font-size: 18px;
  color:rgb(88, 59, 21);
}
.tl{
  margin: 0 auto;
  height: 100px;
  width: 200px;
  position: relative;
  left: -200px;
}
.el-card {


  width: 200px;
}
.el-row{

  margin-bottom: 20px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}
a{
   text-decoration:none;
}

.button {
  padding: 0;
  float: right;
}
.grid-content{

  /* background-color: #00ffff; */
  font-size: 18px;


}


.image {
  width: 100%;
  height: 100px;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>



