import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: "history",   // 删除浏览器里面的 /#
  routes: [
    {
      path: '/',
      name: 'emoji',
      component: () => import('../pages/emoji.vue'),
      meta: {
        title: '表情包'
      }
    }
  ]
})
