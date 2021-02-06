<template>
  <div id="artbar">
    <el-row :gutter="20">
      <el-col :span="12" :offset="7" style="height:50px"
        ><div class="grid-content bg-purple">
          <el-button round>最新热文</el-button>
          <el-button round>心理科普</el-button>
          <el-button round>人际社交</el-button>
          <el-button round>婚恋情感</el-button>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "artbar",
};
</script>


<style scoped>
#artbar {
  margin-top: 50px;

  width: 1000px;
}
.el-row {
  margin-bottom: 20px;
  height: 50px;
}
.el-col {
  border-radius: 4px;
  height: 40px;


  height: 100px;
}
</style>













