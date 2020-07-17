import Vue from 'vue'
import App from "./app.vue";
import Items from "./components/Items.vue";
import SearchLine from "./components/SearchLine.vue";
import '../style/style.scss';

Vue.config.productionTip = false
Vue.component('Items', Items)
Vue.component('SearchLine', SearchLine)
 
new Vue({
  el: '#app',
  render: h => h(App)
})