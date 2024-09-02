import Link from "next/link";
import { APP_ROUTES, SIDEBAR_ROUTES } from "@/app/lib/constant";
import SidebarLink from "@/app/components/navigation/SidebarLink";
import Logo from "@/app/components/branding/Logo";
import { DashboardIcon } from "@/app/assets/icon";
import SidebarFooter from "./SidebarFooter";


export default function Sidebar() {
    return (
        <div className={"bg-dark-300 flex flex-col justify-between gap-6 w-full"}>
            <div className={"flex flex-col gap-10"}>
                {/* LOGO */}
                <section className={"border-b-2 border-gray-300 text-center py-4 px-12"}>
                    <Logo />
                    {/*<span className={"text-green-300 text-center"}>Nigerian APIs</span>*/}
                </section>


                {/* NAV LINK */}
                <section className="flex gap-4 flex-col justify-center mx-6">
                    {SIDEBAR_ROUTES.map(route => <SidebarLink path={route.path} pathLabel={route.pathname} icon={<route.icon />} />)}
                </section>
            </div>


            {/*    PROFILE ACTION CENTER*/}
            <SidebarFooter />
        </div>
    )
}