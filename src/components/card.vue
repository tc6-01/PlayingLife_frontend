<template>
  <van-card v-for="user in props.userList"
            num="2"
            :desc="`${user.profile}`"
            :title='`${user._account}(${user.planetCode})`'
            :thumb="`${user.avatar_url}`"
  >
    <template #tags>
      <van-tag plain v-for="tag in user.tags" type="danger" style="margin: 10px 0 0 10px">{{ tag }}</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty image="search" v-if="!userList || userList.length < 1"  description="不存在当前标签下的用户" />

</template>

<script setup lang="ts">

import {userType} from "../models/user";

interface cardProps{
  userList : userType[]
}
const props = withDefaults(defineProps<cardProps>(),{
  userList: []
})
</script>

<style scoped>

</style>