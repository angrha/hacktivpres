import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Signup from '@/views/Signup'
import Articles from '@/views/Articles'
import ArticleList from '@/components/ArticleList'
import ArticleDetail from '@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/articles',
      component: Articles,
      children: [
        {
          path: '',
          name: 'ArticleList',
          component: ArticleList
        },
        {
          path: ':id',
          name: 'ArticleDetail',
          props: true,
          component: ArticleDetail
        }
      ]
    }
  ]
})
