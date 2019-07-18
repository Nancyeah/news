import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import scIndex from '@/school/schoolIndex'
import schNewsDetail from '@/school/schNewsDetail'
import schNewsMore from '@/school/schNewsMore'
import login from '@/login/login'
import enterIndex from '@/enterprise/enterIndex'
import newsDetail from '@/enterprise/newsDetail'
import newsGovIndex from '@/government/newsGovIndex'
import govNewsDetail from '@/government/govNewsDetail'
import govMoreNews from '@/government/govMoreNews'

Vue.use(Router)

const adminLogin = r => require.ensure([], () => r(require('@/login/adminLogin')),'adminLogin')
const home = r => require.ensure([], () => r(require('@/login/home')),'home')
const userList = r => require.ensure([], () => r(require('@/login/userList')),'userList')
const newsManage_1 = r => require.ensure([], () => r(require('@/login/newsManage_1')),'newsManage_1')
const newsManage_2 = r => require.ensure([], () => r(require('@/login/newsManage_2')),'newsManage_2')
const newsPost_1 = r => require.ensure([], () => r(require('@/login/newsPost_1')),'newsPost_1')
const newsCheck_1 = r => require.ensure([], () => r(require('@/login/newsCheck_1')),'newsCheck_1')
const chart_1 = r => require.ensure([], () => r(require('@/login/chart_1')),'chart_1')
const chart_2 = r => require.ensure([], () => r(require('@/login/chart_2')),'chart_2')
const edit = r => require.ensure([], () => r(require('@/login/edit')),'edit')
const settings_1 = r => require.ensure([], () => r(require('@/login/settings_1')),'settings_1')
const settings_2 = r => require.ensure([], () => r(require('@/login/settings_2')),'settings_2')
const explain = r => require.ensure([], () => r(require('@/login/explain')),'explain')

const router = new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'scIndex',
      component: scIndex
    },
    {
      path: '/schNewsDetail',
      name: 'schNewsDetail',
      component: schNewsDetail
    },
    {
      path:'/schNewsMore',
      name:'schNewsMore',
      component:schNewsMore
    },
    {
      path:'/login',
      name:'login',
      component: login
    },
    /*{
      path:'/login/superAdmin',
      name:'superAdmin',
      component: superAdmin,
      meta: {
        role: ['superAdmin']
      }//meta用来登录鉴权
    }*/
    {
      path:'/enterIndex',
      name:'enterIndex',
      component:enterIndex
    },
    {
      path:'/newsDetail',
      name:'newsDetail',
      component:newsDetail
    },
    {
      path:'/newsGovIndex',
      name:'newsGovIndex',
      component:newsGovIndex
    },
    {
      path: '/govNewsDetail',
      name: 'govNewsDetail',
      component: govNewsDetail
    },
    {
      path: '/govMoreNews',
      name: 'govMoreNews',
      component: govMoreNews
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: adminLogin,
      children: [{
        path:'',
        component: home,
        meta: [],
      },{
        path: '/userList',
        component: userList,
        meta: ['数据管理','用户列表']
      },{
        path: '/newsManage_1',
        component: newsManage_1,
        meta: ['数据管理','新闻管理','板块管理']
      },{
        path: '/newsManage_2',
        component: newsManage_2,
        meta: ['数据管理','新闻管理','内容管理']
      },{
        path:'/newsPost_1',
        component: newsPost_1,
        meta: ['数据管理','新闻发布','板块1']
      },{
        path:'/newsCheck_1',
        component: newsCheck_1,
        meta: ['审核新闻','板块1']
      },{
        path:'/chart_1',
        component: chart_1,
        meta: ['图表','用户分布']
      },{
        path:'/chart_2',
        component: chart_2,
        meta: ['图表','用户数据']
      },{
        path:'/edit',
        component: edit,
        meta: ['编辑','编辑信息']
      },{
        path: '/settings_1',
        component: settings_1,
        meta: ['设置','用户中心']
      },{
        path: '/settings_2',
        component: settings_2,
        meta: ['设置','发送通知']
      },{
        path: '/explain',
        component: explain,
        meta: ['说明','说明']
      }]
    }
  ]
})
export default router
