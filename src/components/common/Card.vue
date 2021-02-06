<template>
  <div>
    <el-row>
      <el-col :span="10" offset="6">
        <el-card :body-style="{ padding: '0px'}">
          <img
            src="@/assets/img/33.jpg"
            class="image"
          />
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
.el-card{
  width: 200px;

}


.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
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



