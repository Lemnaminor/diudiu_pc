import Vue from 'vue'
import Router from 'vue-router'

// import headerNav from '@/components/headerNav'
// import carousel from '@/components/carousel'
// import classify from '@/components/classify'
// import fixedNav from '@/components/fixedNav'

import index from '@/views/index'
import news from '@/views/news'
import classifyPage from '@/views/classifyPage'
import release from '@/views/release'
import reply from '@/views/reply'
import login from '@/views/login'
import register from '@/views/register'
import detail from '@/views/detail'
import legal from '@/views/legal'
import about from '@/views/about'
import sponsor from '@/views/sponsor'

import { 
  Row,Col,Layout,Button,Icon,Input,Carousel,DatePicker,
  LocaleProvider,Tag,Cascader,Select,List,Avatar,Card,
  Popover,Dropdown,Menu,Breadcrumb,Divider,TimePicker,
  AutoComplete,Upload,Modal,Radio,Checkbox,BackTop,
  Badge,message,Form
} from 'ant-design-vue'

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


Vue.use(Router)

Vue.use(Row)
Vue.use(Col)
Vue.use(Layout)
Vue.use(Button)
Vue.use(Icon)
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
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(Divider)
Vue.use(TimePicker)
Vue.use(AutoComplete)
Vue.use(Upload)
Vue.use(Modal)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(BackTop)
Vue.use(Badge)
Vue.use(message)
Vue.use(Form)

Vue.prototype.$message = message;
message.config({
    duration: 2,
});


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/classifyPage',
      name: 'classifyPage',
      component: classifyPage
    },
    {
      path: '/release',
      name: 'release',
      component: release
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      // path: '/detail/:objectId',
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/reply',
      name: 'reply',
      component: reply
    },
    {
      path: '/legal',
      name: 'legal',
      component: legal
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      component: sponsor
    },

  ],
  mode: 'history'
})
