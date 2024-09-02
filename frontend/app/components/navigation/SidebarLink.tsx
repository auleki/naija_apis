"use client"
import Link from "next/link";
import {SidebarLinkProps} from "@/src/types/components";
import { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function SidebarLink({path, pathLabel, icon}: SidebarLinkProps) {
    const rx = usePathname()
    const activeLink = rx === path
    
    return (
        <Link href={path ?? "/not-found"}>
            <button className={`${activeLink ? "bg-green-300" : "bg-transparent text-white gap-2"} sidebar_button group/link:translate-x-0 text-dark-400 flex gap-2 rounded-md px-4 py-2 w-full`}>
                {icon ? <span className={`mt-0.5 group/link-translate-x-0 group-hover/link:translate-x-10 ${activeLink ? "text-dark-400": "text-white"}`}>{icon}</span> : null}
                <span>{pathLabel ?? "No Link"}</span>
            </button>
        </Link>
    )
}``