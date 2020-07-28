import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home'
import Search from '@/components/Search/search'
import Cart from '@/components/Cart/cart'
import Mine from '@/components/Mine/mine'
import NewsList from '@/components/News/newsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },{
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    }
  ]
})
