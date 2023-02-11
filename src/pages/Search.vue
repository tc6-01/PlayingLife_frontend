<template>
  <form action="/">
    <van-search
        v-model="selectTags"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import {useRouter} from "vue-router";
const route = useRouter();
const selectTags = ref();
const onSearch = (val) => showToast(val);
const onCancel = () => route.push("/");

</script>

<style scoped>

</style>