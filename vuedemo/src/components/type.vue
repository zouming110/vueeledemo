<!--首页的分类模块界面，注意：属于该界面中的某块内容-->
<template>
    <div class="type">
        <h1>首页的分类模块界面</h1>
        <img src="../assets/5.jpg" alt="">
        <ul>
            <li>分类1</li>
            <li>分类2</li>
            <li>分类3</li>
            <li>分类4</li>
            <li>分类5</li>
        </ul>
    </div>
</template>

<script>
      export default {
          name:"type",
           created() {
        // 接收编程式路由传递过来的值
        console.log(this.$route);
        
    }
      }
</script>

<style scoped>
   .type{
       height: 500px;
       border: 5px solid blue;
   }
</style>

