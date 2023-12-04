<!-- src/components/Navbar.vue -->
<template>
    <nav class="navbar">
      <router-link to="/">首页</router-link>
      <button  @click="goToLogin" class="login-button">登录</button>
    </nav>
</template>
  
<script>
  export default {
    name: 'MainNavbar',
    // 你可以在这里添加一些逻辑，如果需要的话
    methods: {
    goToLogin() {
      this.$router.push('/login'); // 确保 '/login' 是登录页面的路由路径
    }
  }
  };
  
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    /* 其他样式 */
  }
  
  .login-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .login-button:hover {
    background-color: #5791ca;
  }
  </style>
  