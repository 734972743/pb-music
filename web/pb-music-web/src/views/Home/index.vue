<template>
    <div class="homeBody">

        <el-menu
          :default-active="activeIndex"
          class="home_nav_menu"
          mode="horizontal"
          @select="handleSelect"
          >
          <el-menu-item v-for="(menuItem, index) in menuItemList" :key="index"  :index="menuItem.index" >{{menuItem.name}}</el-menu-item>
        </el-menu>

        <router-view></router-view>
        
    </div>
</template>

<script>
export default {

    data() {
        return {

            menuItemList: [
                {
                    name: "首页",
                    link: "/home",
                    index: "1",
                },
                {
                    name: "歌手",
                    link: "/home",
                    index: "2",
                },
                {
                    name: "新碟",
                    link: "/home",
                    index: "3",
                },
                {
                    name: "排行榜",
                    link: "/home",
                    index: "4",
                },
                {
                    name: "分类歌曲",
                    link: "/home",
                    index: "5",
                },
            ],

            activeIndex: "1",
            
            


        }
    },


    methods: {


        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    },


}
</script>

<style lang="less" scoped>
.homeBody{
    position: relative;
    left: 0;
    top: 0;
    width: 100vw;
    height: 1500px;

    .home_nav_menu{
        position: relative;
        left: 0;
        top: 0;
        width: 1200px;
        height: 55px;
        margin: 0 auto;

        
    }
}
</style>