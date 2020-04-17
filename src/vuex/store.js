import Vue from 'vue'
import Vuex from 'vuex'
import menuModule from './menu'
import basic from './basic'
import work  from './work'
import skills from './skills'
import self from './self'

Vue.use(Vuex)

// 1. stata在Vue中用于存储数据

// 2. mutations里面放的是方法, 作用是主要改变 stata 的数据


var store = new Vuex.Store({
    modules: {
      menuModule,  // 菜单列表
      basic,       // 基本信息
      work,        // 工作经历
      skills,      // 技能证书
      self         // 自我评价
    },
    
    mutations: {
      
    }
})

export default store