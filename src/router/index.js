import Vue from 'vue'
import Router from 'vue-router'

import index from '@/views/index'
import headerNav from '@/components/headerNav'

import {Row,Col,Layout,Button} from 'ant-design-vue'

Vue.use(Router)
Vue.use(Row)
Vue.use(Col)
Vue.use(Layout)
Vue.use(Button)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/headerNav',
      name: 'headerNav',
      component: headerNav
    }
  ]
})
