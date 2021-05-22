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
import OrderManagement from "@/components/pages/orderManagement";



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
      path: "/admin",
      component: Admin,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "產品項目管理",
          component: products,
          meta: { requiresAuth: true },
        },
        {
          path:"ordermanagement",
          name:"訂單管理",
          component: OrderManagement,
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
      component: Order,
      children: [
        {
          path:"",
          name: "訂購人資料",
          component: Personal,
        },
        {
          path:"pay/:orderId",
          name: "付款",
          component: Pay,
        },
        {
          path:"finish",
          name:"完成購買",
          component: Finish,
        },
      ],
    },
  ],
});

