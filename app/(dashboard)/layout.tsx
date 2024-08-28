import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import Sidebar from "@/components/Dashboard/Sidebar";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <section className="flex min-h-screen w-full overflow-hidden bg-primary/10 lg:gap-12">
      <div>
        <Sidebar />
      </div>

      <main className="w-full lg:ml-[232px]">
        <DashboardHeader />
        <div className="px-6 py-3">{children}</div>
      </main>
    </section>
  );
}
