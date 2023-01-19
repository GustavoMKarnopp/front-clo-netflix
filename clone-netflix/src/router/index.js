import Vue from 'vue'
import router from 'vue-router'
// import {http} from '../http/interceptor'

Vue.use(router)

export default new router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../resources/Pages/home'),
      meta: { auth: true, title: 'Netflix' }
    },
    {
      path: '/login',
      name: 'pageLogin',
      component: () => import('../resources/Pages/pageLogin'),
      meta: { auth: true, title: 'Netflix' }
    },
    {
      path: '/browser',
      name: 'Browser',
      component: () => import('../resources/Pages/browser'),
      meta: { auth: true, title: 'Netflix' }
    },
    {
      path: '/gerenciar/perfil',
      name: 'gerenciaPerfil',
      component: () => import('../resources/Pages/gerenciarPerfis-page'),
      meta: { auth: true, title: 'Netflix' }
    },
    {
      path: '/ott_netflix',
      name: 'Ott',
      component: () => import('../resources/Pages/home_OTT'),
      meta: { auth: true, title: 'Netflix' }
    },

    //OBSERVACAO Mesma tela que gerenciaPerfil mais sem edicao
  ]
})

