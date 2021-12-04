import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import Allcourse from '@/views/Allcourse.vue'
import Problem from '@/views/Problem.vue'
import Problemdetail from '@/views/Problemdetail.vue'
import Search from '@/views/Search.vue'
import Personal from '@/views/Personal.vue'
import Studyall from '@/views/Studyall.vue'
import Teacherall from '@/views/Teacherall.vue'
import Hotall from '@/views/Hotall.vue'
import Hotdetail from '@/views/Hotdetail.vue'
import Coursedetail from '@/views/Coursedetail.vue'
import Banding from '@/components/person/Banding.vue'
import Info from '@/components/person/Info.vue'
import History from '@/components/person/History.vue'

Vue.use(VueRouter)
const routes = [
    { path: '/', redirect: '/index' },
    { path: '/personal', redirect: '/personal/banding' },
    { path: '/index', component: Index, meta: { title: '新课网-程序员的加工厂' } },
    { path: '/coursedetail/:id', component: Coursedetail },
    { path: '/allcourse', component: Allcourse, meta: { title: '全部课程_IT培训精品课程-新课网' } },
    { path: '/problem', component: Problem, meta: { title: '新课网-知识问答' } },
    { path: '/problemdetail/:id', component: Problemdetail },
    { path: '/search/:key', component: Search },
    {
        path: '/personal',
        component: Personal,
        children: [
            { path: 'banding', component: Banding },
            { path: 'info', component: Info },
            { path: 'history', component: History }
        ]
    },
    { path: '/studyall/:id', component: Studyall },
    { path: '/teacherall', component: Teacherall },
    { path: '/hotall', component: Hotall },
    { path: '/hotdetail/:id', component: Hotdetail }
]

const router = new VueRouter({
    routes
})

export default router