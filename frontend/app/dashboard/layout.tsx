import React from "react";
import Sidebar from "@/app/components/navigation/Sidebar";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <section className={"min-h-screen bg-dark-400 text-white flex"}>
            {/* SIDEBAR */}
            <div className={"flex bg-dark-300 w-[250px] shadow-dark-400 drop-shadow-md"}>
                <Sidebar />
            </div>
            {/* CURRENT PAGE */}
            <main className={"p-2 px-4"}>{children}</main>
        </section>
    )
}