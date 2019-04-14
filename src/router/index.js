import Vue from 'vue'
import Router from 'vue-router'

import headerNav from '@/components/headerNav'
import carousel from '@/components/carousel'
import classify from '@/components/classify'

import index from '@/views/index'

import {Row,Col,Layout,Button,Input,Carousel,DatePicker,LocaleProvider,Tag,Cascader,Select,List,Avatar,Card} from 'ant-design-vue'

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');



Vue.use(Router)
Vue.use(Row)
Vue.use(Col)
Vue.use(Layout)
Vue.use(Button)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(DatePicker)
Vue.use(LocaleProvider)
Vue.use(moment)
Vue.use(Tag)
Vue.use(Cascader)
Vue.use(Select)
Vue.use(List)
Vue.use(Avatar)
Vue.use(Card)


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
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    }
  ]
})
