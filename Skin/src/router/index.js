import Vue from 'vue'
import Router from 'vue-router'
import Skin from '../components/Skin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/skin',
      component: Skin
    }
  ]
})
