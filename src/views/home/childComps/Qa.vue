<template>
  <div id="qa">
    <el-container class="ac">
      <el-main class="am">
        <el-row :gutter="20">
          <el-col :span="10" :offset="7"
            ><div class="grid-content bg-purple" v-for="item in 10" :key="item">
              <div class="s1">
                <img src="@/assets/img/1.jpg" alt="">

              </div>
              <div class="s2">c</div></div
          ></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "qa",
  components: {},
  data() {
    return {

    };
  },
  methods: {
    hello() {
      console.log("heoool");
    },
  },
};
</script>


<style scoped>
.ac {
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

.am {
  /* 这是背景色 */
  /* background-color: #232425; */
  color: #333;
  text-align: center;
  line-height: 160px;
  width: 200px;
}
.grid-content {
  background-color: #a3a7a7;
  margin-bottom: 30px;
  height: 130px;
  display: flex;
}
.s1 {
  flex: 1;

  height: 100%;
  /* background-color: blueviolet; */
}
.s1 img {
  width: 100px;
  height: 100px;
  display: block;
  margin: 15px auto;
}
.s2 {
  flex: 3;
  background-color: burlywood;
  height: 100%;
  text-align: center;
}
</style>













