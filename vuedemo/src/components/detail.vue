<!--首页的二级界面，详情界面-->
<template>
    <div class="detail">
        <h1>首页的二级界面，详情界面</h1>
        <img src="../assets/2.jpg" alt="">
        <button @click="back1()">返回</button>
        <router-link :to="{name:'third'}">跳转首页三级界面</router-link>
    </div>
</template>

<script>


// $route  获取当前路由对象信息  $router 管理所有路由的管理器
      export default {
          name:"detail",
          methods:{
              back1(){
                //   返回上一个历史记录
                //   this.$router.go(-1);
                // 或者
                  this.$router.back();
              }
          }
          
      }
</script>

<style scoped>
   .detail{
       height: 300px;
       border: 5px solid red;
   }
</style>

