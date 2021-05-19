import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/homepage";
import Login from "@/components/pages/login";
import Admin from "@/components/pages/Admin";
import products from "@/components/product";
import Buy from "@/components/pages/buy";
import Order from "@/components/pages/order";
import Personal from "@/components/pages/PersonalInformation";
import Pay from "@/components/pages/pay";
import Finish from "@/components/pages/finish";


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
          path: "products",
          name: "產品項目管理",
          component: products,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      name: "商品頁面",
      path: "/buy",
      component: Buy,
      meta: { requiresAuth: false },
    },
    {
      path:"/order",
      name:"訂購人資料與訂單確認",
      component: Order,
      children: [
        {
          path:"",
          name: "訂購人資料",
          component: Personal,
        },
        {
          path:"pay",
          name: "付款",
          component: Pay,
        },
        {
          path:"finish",
          name: "訂購人資料",
          component: Finish,
        },
      ],
    },
  ],
});

