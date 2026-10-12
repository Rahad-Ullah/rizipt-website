import * as React from "react";
import { Navbar, Footer } from "@/components/layout";

export default function MainRouteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-[#0B0F17] text-slate-100 selection:bg-[#0094DA]/30 selection:text-white">
            <Navbar />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </div>
    );
}
