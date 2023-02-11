<template>
<!-- 导航栏-->
  <van-nav-bar title="BeerAn匹配" left-arrow @click-left="onClickLeft">
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
<!--中间内容-->
  <div id="context">
  <router-view/>
  </div>
<!--标签栏-->
  <van-tabbar route @change="onChange" >
    <van-tabbar-item icon="home-o" to="/" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/team" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/user" name="user">用户</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';

import Team from "../pages/team.vue";
import Index from "../pages/index.vue";

const onClickLeft = () =>console.log("test");

const onChange = (index) => showToast(`页面切换 ${index}`);
</script>

<style scoped>

</style>