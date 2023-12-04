<template>
  <div class="login-wrapper">
    <div class="login-content">
      <h3>C-视界</h3>
      <p class="description">
        欢迎来到C视界.
      </p>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-wrapper">
          <label for="username">用户名</label>
          <input type="text" id="username" v-model="username" placeholder="请输入用户名或者邮箱">
        </div>
        <div class="input-wrapper">
          <label for="password">密码</label>
          <input type="password" id="password" v-model="password" placeholder="********">
        </div>
        <div class="input-remember">
          <input type="checkbox" id="remember" v-model="remember">
          <label for="remember">记住密码</label>
        </div>
        <button type="submit" class="login-button">登录</button>
      </form>
      <div class="login-links">
        <a href="#">注册</a> | 
        <a href="#">忘记密码?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
      remember: false
    };
  },
  methods: {
    handleLogin() {
      // 实现登录逻辑
      console.log("Login attempt with:", this.username, this.password);
    }
  }
};
</script>

<style scoped>
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eeeeee; /* 或者您页面的背景色 */
}

.login-content {
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.description {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.input-wrapper {
  margin-bottom: 1rem;
}

.input-wrapper label {
  display: block;
  margin-bottom: 0.5rem;
}

.input-wrapper input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-remember {
  margin-bottom: 1rem;
}

.login-button {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}

.login-links {
  text-align: center;
  margin-top: 1rem;
}

.login-links a {
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
}

.login-links a:hover {
  text-decoration: underline;
}
</style>
