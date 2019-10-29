import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Detail from '@/components/detail'

import Type from '@/components/type'
import Tec from '@/components/tec'
import Shop from '@/components/shop'
import Third from '@/components/third'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // 设置默认子路由的入口
      redirect: '/type',
      children:[
        {
          path: 'type',
          name: 'type',
          component: Type
        },
        {
          path: 'tec',
          name: 'tec',
          component: Tec
        },
        {
          path: 'login',
          name: 'login',
          component: Login
        },
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/third',
      name: 'third',
      component: Third
    }
  ]
})
