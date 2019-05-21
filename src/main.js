// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Bmob from "hydrogen-js-sdk";

Vue.config.productionTip = false

// 初始化
Bmob.initialize("a572090901d06be260d1518281155ee7", "42b530dad04f7841d88b0858c57d522e"); 
// 挂载到全局使用
Vue.prototype.Bmob = Bmob

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
