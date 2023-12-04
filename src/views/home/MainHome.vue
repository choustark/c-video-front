<template>
    <div class="home-grid">
      <div class="grid-section">上部分内容</div>
      <div class="grid-section">下部分内容</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainHome',
    // 如果需要，添加脚本部分
  };
  </script>
  
  <style>
  .home-grid {
    display: grid;
    grid-template-rows: 1fr 1fr; /* 三个区域等高 */
    height: 100vh; /* 视窗的100%高度 */
    overflow: hidden; /* 隐藏溢出的内容 */
    margin: 0;
    background-color: #f4f4f4; /* 轻奢风格的背景色 */
  }
  
  .grid-section {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    padding: 2rem; /* 添加内边距 */
    box-sizing: border-box; /* 包括内边距和边框在内的总宽度和总高度 */
  }
  
  /* 添加一些轻奢风格的装饰性样式 */
  .grid-section:nth-child(1) {
    background-color: #eeeeee; /* 每个区域可能有不同的背景色 */
  }
  .grid-section:nth-child(2) {
    background-color: #cccccc;
  }
  
  /* 文本和其他元素的样式 */
  .grid-section h2, .grid-section p {
    margin: 0; /* 移除默认的外边距 */
    color: #333; /* 轻奢风格的文字颜色 */
    font-family: 'Times New Roman', Times, serif; /* 优雅的字体 */
  }
  </style>
  

  