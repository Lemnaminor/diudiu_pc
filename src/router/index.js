import Vue from 'vue'
import Router from 'vue-router'

import headerNav from '@/components/headerNav'
import carousel from '@/components/carousel'

import index from '@/views/index'

import {Row,Col,Layout,Button,Input,Carousel} from 'ant-design-vue'

Vue.use(Router)
Vue.use(Row)
Vue.use(Col)
Vue.use(Layout)
Vue.use(Button)
Vue.use(Input)
Vue.use(Carousel)

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
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: carousel
    }
  ]
})
