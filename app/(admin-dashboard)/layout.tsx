import { Suspense, memo, useState } from "react";
// import NavbarDashboard from "@/components/Dashboard/NavbarDashboard";
import Sidebar from "@/components/AdminDashboard/Sidebar";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ClientRootLayout({ children }: Props) {
  return (
    <div>
      <Suspense fallback={null}>
        <section className="font-inter flex min-h-screen w-full border bg-[#F8F7FA] lg:gap-12">
          <div>
            <Sidebar />
          </div>

          <main className="w-full p-4 transition-all duration-500 lg:ml-[220px]">
            {/* <NavbarDashboard handleOpen={handleOpen} /> */}
            {children}
          </main>
        </section>
      </Suspense>
      ;
    </div>
  );
}
