<template>
  <div id="qa">


    <el-container>
      <el-main>
        <el-row :gutter="20" v-for="item in 8 / 2" :key="item">
          <el-col :span="10" :offset="6">
            <div class="grid-content bg-purple">
              <!-- 嵌套一个a标签 -->
              <a href="">
                  <div class="ph" >
                <img src="@/assets/img/666.jpg" alt="">
              </div>
              </a>
            </div>
          </el-col>
          <!-- <el-col :span="4" :offset="1">
            <div class="grid-content bg-purple">
              {{ item + 5 }}
            </div>
          </el-col> -->
        </el-row>
      </el-main>
      <!-- <el-aside height="100%">Aside</el-aside> -->
    </el-container>
  </div>
</template>

<script>



export default {
  name: "qa",
  components: {


  },
  data() {
    return {
      

    };
  },
  methods:{
    hello(){
      console.log('heoool');
    }
  }
};
</script>


<style scoped>

.el-row {
  margin-bottom: 15px;
}
.el-col {
  border-radius: 4px;
  height: 140px;
}
/* .bg-purple-dark {
  background: #99a9bf;
} */
.bg-purple {
  background: #d3dce6;
}
/* .bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 10px;

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
  /* background-color: #232425; */
  color: #333;
  text-align: center;
  line-height: 160px;
}

.ph{
  height: 100%;
  widows: 50px;

}
img{
  display: block;
  height: 100%;
  width: 100px;
  margin-left: 0;


}
</style>













