import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./components/Home')
        },
        {
            path: '/menu',
            component: () => import('./components/Menu')
        },
        {
            path: '/booking',
            component: () => import('./components/Booking')
        },
        {
            path: '/geolocation',
            component: () => import('./components/Geolocation')
        }
    ]
})