import Layout from "@/layout";

const OrderRouter = {
  path: "/order",
  redirect: "/order/list",
  name: "Order",
  component: Layout,
  meta: { title: "订单管理", icon: "el-icon-collection" },
  children: [
    {
      path: "list",
      name: "Orderlist",
      component: () => import("@/views/order/list/index"),
      meta: { title: "订单列表", icon: "el-icon-notebook-1" }
    },
    {
      path: "detail",
      name: "Orderdetail",
      hidden: true,
      component: () => import("@/views/order/detail/index"),
      meta: { title: "订单详情", activeMenu: "/order/list", noCache: true }
    },
  ]
};

export default OrderRouter;
