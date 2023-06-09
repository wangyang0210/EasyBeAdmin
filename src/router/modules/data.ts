import { $t } from "@/plugins/i18n";
import { data } from "@/router/enums";

export default {
  path: "/data",
  redirect: "/nested/menu1/menu1-1",
  meta: {
    title: $t("menus.hsdataCenter"),
    icon: "histogram",
    rank: data
  },
  children: [
    {
      path: "/nested/menu1",
      meta: {
        title: $t("menus.hsdataOverview"),
        keepAlive: true
      },
      redirect: "/nested/menu1/menu1-1"
    },
    {
      path: "/nested/menu2",
      name: "Menu2",
      component: () => import("@/views/nested/menu2/index.vue"),
      meta: {
        title: $t("menus.hsarticleData"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
