import Vue from 'vue'
import App from './App.vue'
import Routers from './Routers.vue'
// import router from './router'
import store from './store'
import router from './router/index.js'
import SearchLine from "./components/SearchLine.vue";
import Items from "./components/Items.vue";
import AddDocument from './components/AddDocument.vue';
import { mdbBtn } from 'mdbvue';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import '../style/style.sass';
Vue.use(IconsPlugin)
Vue.use(BootstrapVue);
Vue.component('mdb-btn', mdbBtn);
Vue.config.productionTip = false
Vue.component('App', App)
Vue.component('Items', Items)
Vue.component('SearchLine', SearchLine)
Vue.component('AddDocument', AddDocument)
 

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(Routers)
}).$mount('#app');
