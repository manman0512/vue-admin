import Layout from "@/layout";

const organRouter = {
  path: "/organ",
  redirect: "/organ/list",
  name: "Organ",
  component: Layout,
  children: [
    {
      path: "list",
      name: "OrganIndex",
      component: () => import("@/views/organ/index"),
      meta: { title: "机构信息", icon: "el-icon-notebook-1" }
    }
  ]
};

export default organRouter;
