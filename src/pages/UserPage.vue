<template>
  <template v-if="user">
    <van-cell :title="user?.username" value="点击以退出登录" @click="logout"/>
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
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
