<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <img src="../assets/1.jpg" alt>
      <br>
      <router-link to="/detail">跳转到首页详情页面</router-link>
      <router-link :to="{name:'shop'}">跳转到购物车</router-link>
      <br>
      <router-link :to="{name:'type'}">首页切换到分类模块</router-link>
      <router-link :to="{name:'tec'}">首页切换到科技模块</router-link>
      <router-link :to="{name:'login'}">登陆界面</router-link>
    </div>
    <!-- router-view和组件必须同一级别，才能渲染出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "项目首界面"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
