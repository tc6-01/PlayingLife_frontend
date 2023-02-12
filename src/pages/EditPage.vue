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
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const query = ref(route.query);
const editKey = query.value.editKey;
let currentValue = query.value.currentValue

if (editKey === '性别' ){
  currentValue = currentValue ? '男' :'女';
}

console.log(query.value)
const onSubmit = (values) => {
  console.log('submit', values);
};
</script>

<style scoped>

</style>