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
      path: "/system/role/index",
      name: "Base",
      meta: {
        icon: "role",
        title: $t("menus.hbaseSettings"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Comments",
      meta: {
        icon: "role",
        title: $t("menus.hcommentSettings"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Read",
      meta: {
        icon: "role",
        title: $t("menus.hreadSettings"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Read",
      meta: {
        icon: "role",
        title: $t("menus.hpermanentLinkSettings"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/user/index",
      name: "User",
      meta: {
        icon: "flUser",
        title: $t("menus.hpersonalSettings"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Plugin",
      meta: {
        icon: "role",
        title: $t("menus.hpluginManagement"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Appearance",
      meta: {
        icon: "role",
        title: $t("menus.happearanceManagement"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Backup",
      meta: {
        icon: "role",
        title: $t("menus.hbackupManagement"),
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
