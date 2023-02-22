<template>
<card :user-list="userList"/>
</template>

<script setup >
import {onMounted, ref} from 'vue';
import qs from 'qs';
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios";
import {showToast} from "vant";
import Card from "../components/card.vue";

const route = useRoute();
const tags= route.query.tag;
const userList = ref([])
// 初始化自动调用，向后台发送请求
onMounted(async () => {
  console.log(tags)
  const userListData = await myAxios.get('/user/search/tags', {
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
        return response?.data;
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