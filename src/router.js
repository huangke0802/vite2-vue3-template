import { createRouter, createWebHistory } from 'vue-router';

import MyIndex from 'comps/MyIndex.vue';
import HelloWorld from "comps/HelloWorld.vue";
import AntTemplate from "comps/AntTemplate.vue";

export default createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes: [{
      path: '/',
      component: HelloWorld
    },
    {
      path: '/about',
      component: MyIndex
    },
    {
      path: '/anttemplate',
      component: AntTemplate
    },
  ], // `routes: routes` 的缩写
})