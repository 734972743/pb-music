
//这是接口api路由
module.exports = app => {

    const { router, controller } = app;

    //user
    router.get("/api/user/getList", controller.api.user.getList); 
    router.post("/api/user/add", controller.api.user.add); 
    router.post("/api/user/updateOne", controller.api.user.updateOne); 
    router.get("/api/user/deleteOne", controller.api.user.deleteOne); 

     //album
     router.get("/api/album/getList", controller.api.album.getList); 
     router.post("/api/album/add", controller.api.album.add); 
     router.post("/api/album/updateOne", controller.api.album.updateOne); 
     router.get("/api/album/deleteOne", controller.api.album.deleteOne); 
     
     //carousel
     router.get("/api/carousel/getList", controller.api.carousel.getList); 
     router.post("/api/carousel/add", controller.api.carousel.add); 
     router.post("/api/carousel/updateOne", controller.api.carousel.updateOne); 
     router.get("/api/carousel/deleteOne", controller.api.carousel.deleteOne); 
     
     //history
     router.get("/api/history/getList", controller.api.history.getList); 
     router.post("/api/history/add", controller.api.history.add); 
     router.post("/api/history/updateOne", controller.api.history.updateOne); 
     router.get("/api/history/deleteOne", controller.api.history.deleteOne); 
     
     //label
     router.get("/api/label/getList", controller.api.label.getList); 
     router.post("/api/label/add", controller.api.label.add); 
     router.post("/api/label/updateOne", controller.api.label.updateOne); 
     router.get("/api/label/deleteOne", controller.api.label.deleteOne); 
     
     //language
     router.get("/api/language/getList", controller.api.language.getList); 
     router.post("/api/language/add", controller.api.language.add); 
     router.post("/api/language/updateOne", controller.api.language.updateOne); 
     router.get("/api/language/deleteOne", controller.api.language.deleteOne); 
     
     //link
     router.get("/api/link/getList", controller.api.link.getList); 
     router.post("/api/link/add", controller.api.link.add); 
     router.post("/api/link/updateOne", controller.api.link.updateOne); 
     router.get("/api/link/deleteOne", controller.api.link.deleteOne); 
     
     //lyric
     router.get("/api/lyric/getList", controller.api.lyric.getList); 
     router.post("/api/lyric/add", controller.api.lyric.add); 
     router.post("/api/lyric/updateOne", controller.api.lyric.updateOne); 
     router.get("/api/lyric/deleteOne", controller.api.lyric.deleteOne); 
     
     //navigation
     router.get("/api/navigation/getList", controller.api.navigation.getList); 
     router.post("/api/navigation/add", controller.api.navigation.add); 
     router.post("/api/navigation/updateOne", controller.api.navigation.updateOne); 
     router.get("/api/navigation/deleteOne", controller.api.navigation.deleteOne); 
     
     //pageContent
     router.get("/api/pageContent/getList", controller.api.pageContent.getList); 
     router.post("/api/pageContent/add", controller.api.pageContent.add); 
     router.post("/api/pageContent/updateOne", controller.api.pageContent.updateOne); 
     router.get("/api/pageContent/deleteOne", controller.api.pageContent.deleteOne); 
     
     //singer
     router.get("/api/singer/getList", controller.api.singer.getList); 
     router.post("/api/singer/add", controller.api.singer.add); 
     router.post("/api/singer/updateOne", controller.api.singer.updateOne); 
     router.get("/api/singer/deleteOne", controller.api.singer.deleteOne); 
     
     //song
     router.get("/api/song/getList", controller.api.song.getList); 
     router.post("/api/song/add", controller.api.song.add); 
     router.post("/api/song/updateOne", controller.api.song.updateOne); 
     router.get("/api/song/deleteOne", controller.api.song.deleteOne); 
     

}