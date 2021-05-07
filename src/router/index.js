import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/homepage";
import Login from "@/components/pages/login";
import Admin from "@/components/pages/Admin";
import products from "@/components/product";
import Buy from "@/components/pages/buy";
import Bonquet from "@/components/pages/bonquet";
import Potted_Flower from "@/components/pages/potted_flower";
import Wreath from "@/components/pages/wreath";


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
      children: [
        {
          path:"bonquet",
          name: "花束商品",
          component: Bonquet,
        },
        {
          path:"potted_flower",
          name: "植栽商品",
          component: Potted_Flower,
        },
        {
          path:"wreath",
          name: "花環商品",
          component: Wreath,
        },
      ],
    },
  ],
});

