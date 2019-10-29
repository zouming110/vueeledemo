<!--首页的三级界面，详情界面-->
<template>
    <div class="third">
        <h1>首页的三级界面------</h1>
        <button @click="back1()">返回</button>
        
    </div>
</template>

<script>


// $route  获取当前路由对象信息  $router 管理所有路由的管理器
      export default {
          name:"third",
          methods:{
              back1(){
                //   返回上一个历史记录
                  this.$router.go(-1);
              }
          }
          
      }
</script>

<style scoped>
   .third{
       height: 300px;
       border: 5px solid yellow;
   }
</style>

