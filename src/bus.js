import Vue from 'vue';

Vue.prototype.$bus = new Vue(); //將event bus掛在vue底下，所以可以直接對bus做呼叫