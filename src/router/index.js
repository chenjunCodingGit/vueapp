import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/login'
import main from '@/components/page/main'

import today from '@/components/page/today'
import news from '@/components/page/news'
import imgs from '@/components/page/imgs'
import home from '@/components/page/home'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/main',
        name: 'main',
        component: main,
        children: [{
            path: '/main',
            component: main
        }, {
            path: '/today',
            component: today
        }, {
            path: '/news',
            component: news
        }, {
            path: '/imgs',
            component: imgs
        }, {
            path: '/home',
            component: home
        }]
    }]
})