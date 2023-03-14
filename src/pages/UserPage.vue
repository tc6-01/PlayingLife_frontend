<template>
  <template v-if="user">
    <van-cell title="当前用户" :value="user?.username"/>
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
    <van-button type="primary" block @click="userLogin" >退出登录</van-button>
  </template>
  <template v-if="user==null">
    <van-button type="primary" block to="/user/login">用户登录</van-button>
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import {getCurrentUser} from "../services/user";

const user = ref();

const router = useRouter();

onMounted(async () => {
  user.value = await getCurrentUser();
  if (! user.value.username){
    user.value.username = "无名";
  }
})
const userLogin = ()=>{
//   添加跳转路由
  router.push('/user/login');
}
const logout = async ()  => {
  const res = await myAxios.post('/user/logout');
  if (res?.code === 0){
    Toast.success("成功退出登录");
  }else{
    Toast.fail(res?.description);
  }
}
</script>

<style scoped>

</style>
