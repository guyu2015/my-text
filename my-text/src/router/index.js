import Vue from 'vue'
import Router from 'vue-router'
import 'mint-ui/lib/style.css'
import Selling from '../components/selling'
import Mint from 'mint-ui'
Vue.use(Mint);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Selling',
      component: Selling
    }
  ]
})
