import { $t } from "@/plugins/i18n";
import { creative } from "@/router/enums";

export default {
  path: "/creative",
  redirect: "/creative/menu1/menu1-1",
  meta: {
    title: $t("menus.hscreativeCenter"),
    icon: "edit",
    rank: creative
  },
  children: [
    {
      path: "/creative/menu1",
      meta: {
        title: $t("menus.hswriteArticles"),
        keepAlive: true
      },
      redirect: "/creative/menu1/menu1-1"
    },
    {
      path: "/creative/menu2",
      name: "Menu2",
      component: () => import("@/views/nested/menu2/index.vue"),
      meta: {
        title: $t("menus.hscreatePage"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
