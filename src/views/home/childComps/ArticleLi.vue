<template>
  <div id="article">
    <el-container>
      <el-main>
        <el-row :gutter="20" v-for="item in 8 / 2" :key="item">
          <el-col :span="7" :offset="5">
            <div class="grid-content bg-purple">
              <!-- 嵌套一个a标签 -->
              <a href="">
                <div class="ph">
                  <div class="ss">
                    <div class="sss">
                      <div class="son">{{a}}</div>
                    </div>
                  </div>

                  <img src="@/assets/img/666.jpg" alt="" />
                </div>
              </a>
            </div>
          </el-col>
          <el-col :span="7" :offset="1">
            <div class="grid-content bg-purple">
              <!-- 嵌套一个a标签 -->
              <a href="">
                <div class="ph">
                  <div class="ss">
                    <div class="sss">
                      <div class="son">{{a}}</div>
                    </div>
                  </div>

                  <img src="@/assets/img/666.jpg" alt="" />
                </div>
              </a>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import ArtBar from "@/components/common/ArtBar";

export default {
  name: "articleli",
  props: {
    tl: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {},
  data() {
    return {
      a:'怎么样变得更好'
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
#article {
  margin-bottom: 20px;
}
.el-row {
  margin-bottom: 15px;
}
.el-col {
  border-radius: 4px;
  height: 100px;
}
/* .bg-purple-dark {
  background: #99a9bf;
} */
.bg-purple {
  background: #f9f9fa;
}
/* .bg-purple-light {
  background: #e5e9f2;
} */
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-bottom: 20px;
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
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.ph {
  height: 100%;
}
.ss {
  width: 65%;
  height: 100%;
  background-color: antiquewhite;
  float: right;
  text-align: center;
}
.sss {
  width: 80%;
  height: 100%;
  margin: 0 auto;

  color: white;
  display: flex;
  line-height: 100%;
}
.son {
  width: 80%;

  height: 50px;
  background-color: black;
  margin: auto auto;
  text-align: center;
  line-height: 50px;

  /* flex: 1; */
}

img {
  display: block;
  height: 100%;
  width: 30%;
  margin-left: 0;
}
</style>













