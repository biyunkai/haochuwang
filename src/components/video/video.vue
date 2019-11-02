<template>
  <div id="tab">
    <!-- 头部搜索 -->
    <meishitou></meishitou>
    <!-- 列表 -->
    <List></List>
     <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import meishitou from "./components/meishitou"
import List from "./components/List"

export default {
    name: 'tab',
    components: {
        meishitou,
        List
    }
};
</script>

<style scoped>


</style>

