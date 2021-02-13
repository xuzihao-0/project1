<template>
  <div id="artbar">
    <el-row :gutter="20">
      <el-col :span="12" :offset="7" style="height:50px"
        ><div class="grid-content bg-purple">
          <el-button round v-for="(item,index) in title" :key="index" @click="btnclick(index)">{{item}}</el-button>

        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "artbar",
  props:{

  },
  data(){
    return {
      str:'dfdsf',
      title :['最新热文','心理科普','人际社交','婚恋情感']

    }
  },
  methods:{
    btnclick(index){
      console.log(index);
      this.$emit('btnclick',index)
    }
  }
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













