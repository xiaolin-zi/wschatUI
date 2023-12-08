import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import  Layout from '@/layout/default';

const myRouter = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'toLogin',
            component: () => import('@/views/login.vue')
        },
        {
            path: '/chat',
            name: 'wsChat',
            component:Layout,
            children:[
                {
                    path: '',
                    component: () => import('@/views/chat.vue')
                }
            ]
        },
        {
            path:'/index',
            name:'toIndex',
            component:Layout,
            children:[
                {
                    path:'',
                    component: () => import('@/views/index.vue')
                }
            ]
        }
    ]
})

export default myRouter