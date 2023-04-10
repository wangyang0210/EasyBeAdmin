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
        title: $t("menus.hsbaseSettings"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Comments",
      meta: {
        icon: "role",
        title: $t("menus.hscommentSettings"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Read",
      meta: {
        icon: "role",
        title: $t("menus.hsreadSettings"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Read",
      meta: {
        icon: "role",
        title: $t("menus.hspermanentLinkSettings"),
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
        title: $t("menus.hspluginManagement"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Appearance",
      meta: {
        icon: "role",
        title: $t("menus.hsappearanceManagement"),
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Backup",
      meta: {
        icon: "role",
        title: $t("menus.hsbackupManagement"),
        roles: ["admin"]
      }
    }
  ]
} as RouteConfigsTable;
