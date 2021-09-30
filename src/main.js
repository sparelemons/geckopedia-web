import Vue from 'vue'
import VueRouter from 'vue-router'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
import App from './App.vue'

import '@/css/style.scss';

Vue.use(VueRouter)
import Home from './pages/Home.vue'
import PageNotFound from './pages/PageNotFound.vue'
import FAQ from "./pages/FAQ.vue";
import Privacy from "./pages/Privacy.vue";
import Terms from "./pages/Terms.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/faq',
    component: FAQ
  },
  {
    path: '/privacy',
    component: Privacy
  },
  {
    path: '/terms',
    component: Terms
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    return new Promise(() => {
      if (to.hash) {
        window.scroll({ top: 0 })
      } else {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({ top: 0 })
        document.querySelector('html').style.scrollBehavior = ''
      }
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
