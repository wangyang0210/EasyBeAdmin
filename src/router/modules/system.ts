import { $t } from "@/plugins/i18n";
import { system } from "@/router/enums";

export default {
  path: "/system",
  meta: {
    icon: "setting",
    title: $t("menus.hssysManagement"),
    rank: system
  },
  children: [
    {
      path: "/system/user/index",
      name: "User",
      meta: {
        icon: "flUser",
        title: $t("menus.hsUser"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Role",
      meta: {
        icon: "role",
        title: $t("menus.hsRole"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/dept/index",
      name: "Dept",
      meta: {
        icon: "dept",
        title: $t("menus.hsDept"),
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
