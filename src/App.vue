<template>
  <div id="app">
    <MainNavbar /> <!-- 引入导航栏组件 -->
    <router-view></router-view> <!-- 路由视图 -->
  </div>
</template>

<script>
import MainNavbar from './components/MainNavbar.vue'; // 确保路径正确

export default {
  name: 'App',
  components: {
    MainNavbar // 将 MainNavbar 组件注册到 App 组件
  }
};
</script>

<style>
/* 这里可以添加一些全局样式 */
header {
  background-color: #f8f8f8;
  padding: 10px 20px;
  text-align: center;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

main {
  margin: 20px;
}

footer {
  background-color: #f8f8f8;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
