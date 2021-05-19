import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
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
import 'bootstrap';
import currencyFilter from '@/filters/currency';
import '@/bus.js';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
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
VeeValidate.Validator.localize('zhTW', zhTW);

axios.defaults.withCredentials = true;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zhTW',
});

Vue.use(VeeValidate, {
  events: 'input|blur',
  i18n,
  dictionary: {
    zhTW,
  },
});


new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");


router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next);
  //假設要到達的頁面(to)的meta具有requireauth的話 將不會放行
  if(to.meta.requiresAuth){
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
      axios.post(api).then((response) => {
        console.log(response.data);
        //如果登入狀態為success，則router路由的路徑回到首頁
        if (response.data.success) {
          next();
        }else{
          next({
            path:'/login',
          });
        }
      });
  }else{
    next();
  }
});

