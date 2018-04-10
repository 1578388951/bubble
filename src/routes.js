import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import share from './views/share/list.vue'
import createshare from './views/share/createshare.vue'
import activity from './views/activity/list.vue'
import copywritinglibrary from './views/copywritinglibrary/list.vue'
import createactivity from './views/activity/createactivity.vue'
import advertisingPosition from './views/advertisingPosition/advertisingPosition.vue'

let routes = [
    {
        path: '/',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: '',
        leaf: true,
        children: [
            { path: '/activityList', component: activity, name: '活动列表' },
            { path: '/createactivity', component: createactivity, name: '活动列表',hidden: true }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: '',
        leaf: true,
        children: [
            { path: '/shareList', component: share, name: '分享列表'},
            { path: '/createshare', component: createshare, name: '分享列表',hidden: true}
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: '',
        leaf: true,
        children: [
            { path: '/copywritinglibrary', component: copywritinglibrary, name: '文案库' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: '',
        leaf: true,
        children: [
            { path: '/advertisingPosition', component: advertisingPosition, name: '广告位' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;