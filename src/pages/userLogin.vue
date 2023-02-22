<template>

  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="账号"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
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
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showToast} from "vant";
import {useRouter} from "vue-router";

const router = useRouter();
const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async (values) => {
  const res = await myAxios.post('/user/login', {
    "password": userPassword.value,
    "userAccount": userAccount.value
  })
  if ( res.code === 0 && res.data){
    showToast("登录成功");
    await router.replace("/");
  }else{
    showToast(res.description);
  }
};
</script>

<style scoped>

</style>