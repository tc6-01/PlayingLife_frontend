<template>
  <form action="/">
<!--TODO 查询优化--实时查询，提升用户体验    -->
    <van-search
        v-model="selectTags"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <van-empty v-if="activeChildren.length===0" image-size="80" image="search" description="请选择搜索标签"/>
  <van-row justify="space-around">
    <van-col span="20">
      <van-tag round v-for="tag in activeChildren" closeable size="medium" type="primary"
               @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>
  <van-divider content-position="left">可选标签</van-divider>
<!--TODO 只显示查询内容，可能需要重构  -->
  <van-tree-select
      v-model:active-id="activeChildren"
      v-model:main-active-index="activeParentIndex"
      :items="TagList"
  />
</template>

<script setup lang="ts">
import {ref} from 'vue';

const selectTags = ref('');
// 默认选中
const activeParentIndex = ref(0);
const activeChildren = ref([]);
const nativeTagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '方向',
    children: [
      {text: 'Java', id: 'Java'},
      {text: 'C++', id: 'C++'},
      {text: 'Go', id: 'Go'},
      {text: '前端', id: '前端'},
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
      {text: '大四', id: '大四'},
    ],
  },
];

let TagList = ref(nativeTagList);


// 搜索过滤
const onSearch = () => {
  TagList.value = nativeTagList.map(parent => {
    const tempChildren = [...parent.children]
    const tempParent = {...parent}
    tempParent.children = tempChildren.filter(item => item.text.includes(selectTags.value))
    return tempParent;
  });
}

// 取消搜索
const onCancel = () => {
  selectTags.value = '';
  TagList.value = nativeTagList;
};

// 关闭标签√
const doClose = (tag: any) => {
  activeChildren.value = activeChildren.value.filter(item => {
    return item !== tag;
  })
};


</script>

<style scoped>

</style>