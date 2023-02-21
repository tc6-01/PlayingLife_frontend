<template>
  <van-card v-for="user in userList"
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

<script setup >
import {onMounted, ref} from 'vue';
import qs from 'qs';
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios";
import {showToast} from "vant";

const route = useRoute();
const tags= route.query.tag;
const userList = ref([])
// 初始化自动调用，向后台发送请求
onMounted(async () => {
  console.log(tags)
  const userListData = await myAxios.get('/api/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: {
      serialize: params => {
        return qs.stringify(params, {arrayFormat: 'repeat'})
      }
    }
  })
      .then(function (response) {
        console.log('/user/search/tags success', response);
        showToast("搜索成功");
        console.log("这是响应值",response.data);
        return response.data?.data;
      })
      .catch(function (error) {
        console.log('/user/search/tags error', error);
        showToast("请求失败");
      })
  if (userListData) {
    userListData.forEach(user=>{
      if (user.tags){
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
    console.log("这是数据",userList.value)
  }
})

</script>

<style scoped>

</style>