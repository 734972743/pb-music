<!-- 这个是页面的总框架 -->
<template>
  <div class="layoutBody">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/page/header.vue";
import Body from "@/components/page/body.vue";
import Footer from "@/components/page/footer.vue";
export default {

  components:{
    Header,
    Body,
    Footer
  },

  data () {
    return {
      

    }
  }


}
</script>

<style lang="less" scoped>
.layoutBody{
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

</style>