<template v-if="user">
  <van-cell title="昵称" :value="user.username" @click="onclick('username',user.username)" is-link to="/user/edit"/>
  <van-cell title="账号" :value="user._account" @click="onclick('_account',user._account)" is-link to="/user/edit"/>
<!--  todo 优化头像上传功能-->
  <van-cell title="头像"   >
    <van-image
        round
        width="30"
        height="30"
        :src="user.avatar_url"
    />
  </van-cell>
  <van-cell title="性别" :value="user.gender" @click="onclick('gender',user.gender)" is-link to="/user/edit"/>
  <van-cell title="电话" :value="user.phone" @click="onclick('phone',user.phone)" is-link to="/user/edit"/>
  <van-cell title="邮箱" :value="user.email" @click="onclick('email',user.email)" is-link to="/user/edit"/>
  <van-cell title="星球账号" :value="user.planetCode"/>
  <van-cell title="创建时间" :value="user.create_time"/>
  <van-cell title="个人简介" :value="user.profile" @click="onclick('profile',user.profile)"/>

</template>


<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts";

const router = useRouter();

const user = ref({

})

onMounted(async ()=>{
  user.value =  await getCurrentUser();
})
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