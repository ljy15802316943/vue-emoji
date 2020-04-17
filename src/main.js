// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from './assets/api';
import { vueBaberrage } from 'vue-baberrage'
import store from './vuex/store'  
import Vant from 'vant';
import 'vant/lib/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


Vue.prototype.$axios = axios; //绑定到vue原型

// 弹幕插件
Vue.use(vueBaberrage);
Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
