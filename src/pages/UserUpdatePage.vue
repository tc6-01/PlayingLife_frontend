<template>
  <template v-if="user">
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username"  @click="toEdit('username', '昵称', user.username)"/>
    <van-cell title="账号" :value="user._account"/>
    <van-cell title="头像" is-link to="/user/edit">
      <img style="height: 48px" :src="user.avatar_url"/>
    </van-cell>
    <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
<!--//TODO 优化TAG用户输入，提高用户体验-->
    <van-cell title="标签" is-link to="/user/edit" :value="user.tags" @click="toEdit('tags', '标签', user.tags)"/>
    <van-cell title="学号" :value="user.planetCode"/>
    <van-cell title="注册时间" :value="time"/>
  </template>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user";

const user = ref();
const time = ref()
onMounted(async () => {
  user.value = await getCurrentUser();
  time.value = new Date(user.value.create_time).toLocaleString()
})

const router = useRouter();

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<style scoped>

</style>