import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/HelloWorld";
import Login from "@/components/pages/login";



Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: "home", //元件呈現的名稱
      path: "/", //對應的虛擬路徑
      component: Home, //對應的元件
    },
    {
      name: "Login", //元件呈現的名稱
      path: "/login", //對應的虛擬路徑
      component: Login, //對應的元件
    },
  ]
});

