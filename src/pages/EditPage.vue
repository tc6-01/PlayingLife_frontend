<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="currentValue"
          :name="editKey"
          :label="editKey"
          :placeholder="`请输入${editKey}`"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import { ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {getCurrentUser} from "../services/user.ts";
import {showToast} from "vant";
const router = useRouter();
const route = useRoute();
const query = ref(route.query);
const editKey = query.value.editKey;
let currentValue = query.value.currentValue
// todo 优化性别展示与前端修改界面
const onSubmit = async (values) => {
  const currentUser = await getCurrentUser();
  if (currentUser == null){
    showToast("用户未登录")
    return null;
  }
  // console.log(currentUser,"页面修改获取当前登录用户")
  const res = await myAxios.post('/user/update', {'id':currentUser.id,[editKey]: currentValue})
  if(res.code === 0){
    showToast("修改成功")
    router.replace('/user')
  }
  if (res.code === 40101){
    showToast("权限不足")
  }
};


</script>

<style scoped>

</style>