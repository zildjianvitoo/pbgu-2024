// import NavbarDashboard from "@/components/Dashboard/NavbarDashboard";
import Sidebar from "@/components/AdminDashboard/Sidebar";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AdminDashboardLayout({ children }: Props) {
  return (
    <div>
      <section className="font-inter flex min-h-screen w-full bg-[#F8F7FA] lg:gap-12">
        <div>
          <Sidebar />
        </div>

        <main className="w-full p-4 transition-all duration-500 lg:ml-[220px]">
          {/* <NavbarDashboard handleOpen={handleOpen} /> */}
          {children}
        </main>
      </section>
    </div>
  );
}
