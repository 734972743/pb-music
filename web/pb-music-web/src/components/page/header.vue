<template>
  <div class="headerBody">
    <div class="section_inner">
         <div class="logoDiv">
          <div class="logoImg"></div>
          <span class="logoText">PB音乐</span>
        </div>

        <el-menu
          :default-active="activeIndex"
          class="nav_menu"
          mode="horizontal"
          @select="handleSelect"
          >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="3" >我的音乐</el-menu-item>
        </el-menu>

        <el-input
          class="search_input"
          placeholder="请输入内容"
          v-model="input4">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>

        <el-button class="loginBtn" type="success">登录</el-button>
    </div>
   
  </div>
</template>

<script>
export default {

  data () {
    return {
      
      activeIndex: "1",
    }
  }

}
</script>

<style lang="less">
.headerBody{
  width: 100%;
  height: 90px;
  margin: 0 auto;

  .section_inner{
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    border-bottom: 1px solid #f1ecec;
    box-sizing: border-box;

    .logoDiv{
      position: relative;
      left: 0;
      top: 0;
      width: 250px;
      height: 100%;

      .logoImg{
        position: absolute;
        left: 0;
        top: 20px;
        width: 50px;
        height: 50px;
        // background: red;
      }

      .logoText{
        position: absolute;
        left: 70px;
        top: 18px;
        font-size: 40px;
        font-weight: bold;
      }
    }

    .nav_menu{
      position: relative;
      left: 248px;
      top: -92px;
      width: 240px;
      height: 100%;

      .el-menu-item{
        font-size: 25px;
        height: 100%;
        line-height: 90px;
        color: black;
        background-color: #fff;
        border-color: transparent !important;
      }

      .is-active{
        background-color: green !important;
        color: #fff !important;
      }
      
    }

    .search_input{
        position: absolute;
        left: 511px;
        top: 23px;
        width: 300px;
        height: 47px;
    }

    .loginBtn{
        position: absolute;
        left: 880px;
        top: 22px;
        width: 100px;
        height: 40px;
    }




  }
  
}

</style>