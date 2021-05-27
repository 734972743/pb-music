<template>
  <div class="homeHomeBody">

      <div class="pageContent" v-for="(pageContent, index) in pageContetList" :key="index" >
          <div class="pageContentTitle">{{pageContent.title}}</div> 
          <el-menu
            :default-active="activeIndex"
            class="home_home_nav_menu"
            mode="horizontal"
            @select="handleSelect"
            >
            <el-menu-item v-for="(menuItem, index2) in pageContent.menuItemList" :key="index2"  :index="menuItem.index" >{{menuItem.name}}</el-menu-item>
        </el-menu>

        <div class="songList">
            <div class="song" v-for="(song,index3) in pageContent.songList" :key="index3" >
                <img :src="song.img_url" class="songImg" alt="">
                <div class="title">{{song.title}}</div>
                <div class="author">{{song.author}}</div>
            </div>
        </div>
        
     
     
      </div>

  </div>
</template>

<script>
export default {

    data() {
        return {
            pageContetList: [
                {
                    title: "歌单推荐",
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


                    songList: [
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        },
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        },
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        },
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        }, 
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        },
                     ]
                },
                {
                    title: "歌单推荐",
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


                    songList: [
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        },
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        },
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        },
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        }, 
                        {
                            title: "不加冰可乐",
                            img_url: "https://y.qq.com/music/photo_new/T015R640x360M101001EwhUX2ZH5Wp.jpg?max_age=2592000",
                            author: "三妹"
                        },
                     ]
                }
            ],
        }
    },

}
</script>

<style lang="less" scoped>
.homeHomeBody{
    position: relative;
    left: 0;
    top: 0;
    width: 100vw;
    height: 1500px;

    .pageContent{
        position: relative;
        left: 0;
        top: 0;
        width: 100vw;
        height: 454px;

        .pageContentTitle{
            position: absolute;
            top: 17px;
            height: 47px;
            font-weight: bold;
            font-size: 32px;
            text-align: center;
            width: 100%;
        }

       /deep/ .home_home_nav_menu{
            position: relative;
            top: 60px;
            width: 900px;
            height: 115px;
            margin: 0 auto;
            display: flex;

            .el-menu--horizontal{
                border-bottom: none;
            }

            .el-menu-item{
                font-size: 25px;
                height: 100%;
                line-height: 45px;
                color: black;
                background-color: #fff;
                flex: 1;
            }

            .is-active{
                background-color: green !important;
                color: #fff !important;
            }
        }

        .songList{
            position: relative;
            height: 270px;
            width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-evenly;

            .song{
                position: relative;
                left: 0;
                top: 0;
                width: 224px;
                height: 271px;

                .songImg{
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 224px;
                    height: 224px;
                }

                .title{
                    position: absolute;
                    left: 14px;
                    top: 226px;
                    font-size: 18px;
                }

                .author{
                    position: absolute;
                    left: 14px;
                    top: 245px;
                    font-size: 18px;
                }
            }
        }

        

    }


}
</style>