import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';
import AddDocument from '../components/AddDocument.vue';
import Items from '../components/Items.vue';
import { FormInputPlugin } from 'bootstrap-vue'

Vue.use(FormInputPlugin)
Vue.use(Router);

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/add',
    component: AddDocument
  }
];

const router = new Router({
  mode: 'history',
  routes
});


export default router;