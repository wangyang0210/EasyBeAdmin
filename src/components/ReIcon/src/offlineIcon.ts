import { addIcon } from "@iconify/vue/dist/offline";

/**
 * 这里存放本地图标，在 src/layout/index.vue 文件中加载，避免在首启动加载
 */

// 本地菜单图标，后端在路由的icon中返回对应的图标字符串并且前端在此处使用addIcon添加即可渲染菜单图标
import Menu from "@iconify-icons/ep/menu";
import Edit from "@iconify-icons/ep/edit";
import HomeFilled from "@iconify-icons/ep/home-filled";
import ListCheck from "@iconify-icons/ri/list-check";
import Histogram from "@iconify-icons/ep/histogram";
import Setting from "@iconify-icons/ri/settings-3-line";
import GroupFill from "@iconify-icons/ri/group-fill";
import Help from "@iconify-icons/ep/help-filled";
addIcon("menu", Menu);
addIcon("edit", Edit);
addIcon("homeFilled", HomeFilled);
addIcon("listCheck", ListCheck);
addIcon("histogram", Histogram);
addIcon("setting", Setting);
addIcon("GroupFill", GroupFill);
addIcon("Help", Help);
