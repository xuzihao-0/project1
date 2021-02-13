<template>
  <div class="art">
    <el-row type="flex" justify="start">
      <el-col :span="6" :offset="6">
        <el-container>
          <el-header>
            <div class="hh">

            </div>
          </el-header>
          <el-container>
            <el-aside width="100px">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "art",
};
</script>

<style scoped>
.el-col {
  height: 100px;
  background-color: teal;
}



  .el-header {
    height: 100px;
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .hh{
    width: 100px;
    height: 200px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>











