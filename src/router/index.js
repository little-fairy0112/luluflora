import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/homepage";
import Login from "@/components/pages/login";
import Admin from "@/components/pages/Admin";
import product from "@/components/product";


Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/login",
    },
    {
      name: "首頁", //元件呈現的名稱
      path: "/", //對應的虛擬路徑
      component: Home, //對應的元件
    },
    {
      name: "登入", //元件呈現的名稱
      path: "/login", //對應的虛擬路徑
      component: Login, //對應的元件
    },
    {
      name: "管理",
      path: "/admin",
      component: Admin,
      meta: { requiresAuth: true },
      children: [
        {
          path: "product",
          name: "產品項目管理",
          component: product,
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});

