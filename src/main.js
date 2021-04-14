import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from "./App.vue";
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'




Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
library.add(faHandHoldingHeart);
library.add(faSmile);
library.add(faSeedling);
library.add(faClock);
library.add(faPhone);
library.add(faMapMarkerAlt);



new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
