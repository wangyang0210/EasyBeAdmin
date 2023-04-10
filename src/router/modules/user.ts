import { $t } from "@/plugins/i18n";
import { user } from "@/router/enums";

export default {
  path: "/user",
  redirect: "/nested/menu1/menu1-1",
  meta: {
    title: $t("menus.hsUserCenter"),
    icon: "GroupFill",
    rank: user
  },
  children: [
    {
      path: "/nested/menu1",
      meta: {
        title: $t("menus.hsUser"),
        keepAlive: true
      },
      redirect: "/nested/menu1/menu1-1"
    },
    {
      path: "/nested/menu2",
      name: "Menu2",
      component: () => import("@/views/nested/menu2/index.vue"),
      meta: {
        title: $t("menus.hsRole"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
