<template>
  <div class="container">
    <!-- 顶部 Header-->
    <mt-header fixed title="固定在顶部"></mt-header>

    <!-- 中间 router-view -->
    <h1>App</h1>

    <!-- 底部tabbar -->
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav>
  </div>
</template>

<script>
import mui from "./lib/mui/js/mui";
export default {
  data() {
    return {};
  },
  created() {
    mui.init({
      swipeBack: true //启用右滑关闭功能
    });
  }
};
</script>

<style scoped>
.container {
  padding-top: 40px;
}
</style>