import {DashboardIcon, ExploreIcon, ProfileIcon, SettingsIcon} from "@/app/assets/icon";
import { TbLayoutDashboard } from "react-icons/tb";
import { SiWpexplorer } from "react-icons/si";
import { FaUserAstronaut } from "react-icons/fa";
import { TbSettings2 } from "react-icons/tb";


export const APP_ROUTES = {
    "DASHBOARD": "/dashboard",
}

const sidebarParent = "/dashboard"
const SR_MAP = {
    "DASHBOARD": sidebarParent,
    "PROFILE": sidebarParent + "/profile",
    "EXPLORE": sidebarParent + "/explore",
    "SETTINGS": sidebarParent + "/settings"
}
export const SIDEBAR_ROUTES = [
    {
        pathname: "Dashboard",
        path: SR_MAP.DASHBOARD,
        icon: TbLayoutDashboard,
    },
    {
        pathname: "Explore",
        path: SR_MAP.EXPLORE,
        icon: SiWpexplorer
    },
    {
        pathname: "Profile",
        path: SR_MAP.PROFILE,
        icon: FaUserAstronaut
    },
    {
        pathname: "Settings",
        path: SR_MAP.SETTINGS,
        icon: TbSettings2
    },   
]