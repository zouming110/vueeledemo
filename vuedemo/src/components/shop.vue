<!--购物车界面-->
<template>
    <div class="shop">
        <h1>购物车界面</h1>
        <img src="../assets/3.jpg" alt="">
        <ol>
            <li>商品1</li>
            <li>商品2</li>
            <li>商品3</li>
            <li>商品4</li>
            <li>商品5</li>
        </ol>
        <button @click="back1()">返回</button>
    </div>
</template>

<script>


// $route  获取当前路由对象信息  $router 管理所有路由的管理器
      export default {
          name:"shop",
          methods:{
              back1(){
                //   返回上一个历史记录
                  this.$router.go(-1);
              }
          }
          
      }
</script>

<style scoped>
   .shop{
       height: 300px;
       border: 5px solid red;
   }
</style>

