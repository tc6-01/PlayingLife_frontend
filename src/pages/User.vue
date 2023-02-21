<template>
  <van-cell title="昵称" @click="onclick('昵称',user.username)" is-link to="/user/edit"/>
  <van-cell title="账号" @click="onclick('账号',user._account)" is-link to="/user/edit"/>
  <van-cell title="头像" is-link to="/user/edit">
    <van-image
        round
        width="30"
        height="30"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
    />
  </van-cell>
  <van-cell title="性别" @click="onclick('性别',user.gender)" is-link to="/user/edit"/>
  <van-cell title="电话" is-link to="/user/edit"/>
  <van-cell title="邮箱" is-link to="/user/edit"/>
  <van-cell title="星球账号" is-link to="/user/edit" :value="user.planetCode"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.createTime.toLocaleString()"/>

</template>


<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

const user = {
  id: 1,
  username: 'dsdsds',
  _account: 'yupisds',
  avatar_url: 'http:baidu.com',
  gender: '1',
  phone: '212121212121',
  email: '212121212.com',
  planetCode: '1111',
  createTime: new Date(),
}
const onclick = (editKey, currentValue)=>{
  router.push({
    path:'user/edit',
    query:{
      editKey,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>