import { $t } from "@/plugins/i18n";
import { content } from "@/router/enums";

export default {
  path: "/content",
  redirect: "/nested/menu1/menu1-1",
  meta: {
    title: $t("menus.hscontentManagement"),
    icon: "menu",
    rank: content
  },
  children: [
    {
      path: "/nested/menu1",
      meta: {
        title: $t("menus.hsarticlesManagement"),
        keepAlive: true
      },
      redirect: "/nested/menu1/menu1-1"
    },
    {
      path: "/nested/menu1",
      meta: {
        title: $t("menus.hspageManagement"),
        keepAlive: true
      },
      redirect: "/nested/menu1/menu1-1"
    },
    {
      path: "/nested/menu1",
      meta: {
        title: $t("menus.hscommentsManagement"),
        keepAlive: true
      },
      redirect: "/nested/menu1/menu1-1"
    },
    {
      path: "/nested/menu1",
      meta: {
        title: $t("menus.hscategoryManagement"),
        keepAlive: true
      },
      redirect: "/nested/menu1/menu1-1"
    },
    {
      path: "/nested/menu1",
      meta: {
        title: $t("menus.hstagsManagement"),
        keepAlive: true
      },
      redirect: "/nested/menu1/menu1-1"
    },
    {
      path: "/nested/menu2",
      component: () => import("@/views/nested/menu2/index.vue"),
      meta: {
        title: $t("menus.hsfileManagement"),
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
