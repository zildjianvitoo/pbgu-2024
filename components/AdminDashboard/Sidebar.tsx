"use client";

import { Accordion } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  Award,
  ChevronRight,
  FileDown,
  GraduationCap,
  Home,
  ListChecks,
  LogOut,
  SquareUserRound,
  User2Icon,
  X,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "sonner";

const sidebarLink = [
  {
    name: "Dashboard",
    url: "/admin-dashboard",
    Icon: Home,
  },
  {
    name: "Voting",
    url: "/admin-dashboard/voting",
    Icon: ListChecks,
    children: [
      {
        name: "Voting",
        url: "/admin-dashboard/voting",
      },
      {
        name: "Voting",
        url: "/admin-dashboard/voting",
      },
    ],
  },
  {
    name: "Finalis",
    url: "/admin-dashboard/finalis",
    Icon: User2Icon,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/");
    toast.success("Behasil Log Out!");
  }

  return (
    <>
      <aside
        className={cn(
          "box-shadow fixed z-50 min-h-screen w-[280px] overflow-hidden border-r bg-primary px-4 py-7 transition-all duration-500",
          isOpen ? "translate-x-0" : "max-lg:-translate-x-full",
        )}
      >
        <div className="flex w-full items-center gap-4">
          <Link
            href={"/dashboard"}
            className="relative flex size-12 items-center gap-4"
          >
            <Image
              src="/images/logo-ibgu.png"
              alt="Logo"
              className="object-contain object-center"
              fill
            />
          </Link>
          <p className="text-2xl font-bold text-primary-foreground lg:text-3xl">
            IBGU
          </p>
          <X
            onClick={() => setIsOpen(!isOpen)}
            className="text-background lg:hidden"
            size={24}
            strokeWidth={1.8}
          />
        </div>

        <ScrollArea className="mt-8 h-[85vh]">
          <Accordion type="single" className="flex flex-col gap-2" collapsible>
            {sidebarLink.map((item) => (
              <div key={item.url}>
                <Link
                  key={item.url}
                  href={item.url}
                  className={cn(
                    "mt-1 flex w-full items-center justify-between rounded-md px-5 py-2.5 text-background duration-300",
                    pathname === item.url
                      ? "bg-background text-primary shadow-sm"
                      : "hover:bg-background hover:text-primary",
                  )}
                >
                  <div className={`"justify-center flex items-center gap-5`}>
                    <item.Icon strokeWidth={1.8} size={24} />
                    <div className="text-xl">{item.name}</div>
                  </div>
                </Link>
              </div>
            ))}
            <Separator className="opacity-70" />
            <div>
              <div
                className={cn(
                  "mt-1 flex w-full items-center justify-between rounded-md px-5 py-2.5 text-background duration-300",
                  pathname === "/"
                    ? "bg-background text-primary shadow-sm"
                    : "hover:bg-background hover:text-primary",
                )}
              >
                <div
                  onClick={handleLogout}
                  className={`"justify-center flex cursor-pointer items-center gap-5`}
                >
                  <LogOut strokeWidth={1.8} size={24} />
                  <div className="text-xl">Log Out</div>
                </div>
              </div>
            </div>
          </Accordion>
        </ScrollArea>
      </aside>
      {!isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 z-50 grid size-8 place-items-center rounded-e-lg bg-white text-primary lg:hidden"
        >
          <ChevronRight size={24} strokeWidth={1.8} />
        </div>
      )}
    </>
  );
}
