"use client";

import {
  BarChartBig,
  BookCopy,
  CircleDashed,
  Home,
  Lightbulb,
  ListChecks,
  Newspaper,
  User,
  User2Icon,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

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

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <aside
      className={`box-shadow fixed z-50 min-h-screen w-[260px] overflow-hidden bg-primary p-4 text-white transition-all duration-500 ${isOpen ? "translate-x-0" : "max-lg:-translate-x-full"}`}
    >
      <div className="flex items-center justify-between">
        <Link
          href={"/admin-dashboard"}
          className="mx-auto flex items-center justify-center gap-4"
        >
          <Image
            src="/images/logo-ibgu.png"
            width={100}
            height={100}
            alt="logo ibgu"
          />
        </Link>
        <X
          className="lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          size={24}
          strokeWidth={1.5}
        />
      </div>

      <ScrollArea className="mt-4 h-[85vh]">
        <Accordion type="single" className="flex flex-col gap-2" collapsible>
          {sidebarLink.map((item) => (
            <div key={item.url}>
              {item.children ? (
                <AccordionItem
                  value={item.name}
                  className="m-0 border-none p-0"
                >
                  <AccordionTrigger
                    key={item.url}
                    className={`flex w-full items-center justify-between rounded-md px-2.5 py-2.5 duration-300 hover:bg-primary/80`}
                  >
                    <div className={`"justify-center flex items-center gap-3`}>
                      <item.Icon strokeWidth={1.5} size={20} />
                      <div>{item.name}</div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="ml-2 mt-2 flex flex-col gap-2">
                    {item.children.map((subitem, subitemIndex) => (
                      <div key={subitemIndex}>
                        <div className="w-full text-left">
                          <Link
                            key={subitem.url}
                            href={subitem.url}
                            className={`${pathname === subitem.url ? "bg-primary text-white shadow-md" : "group"} mt-1 flex w-full items-center justify-between rounded-md px-2.5 py-2.5`}
                          >
                            <div
                              className={`"justify-center flex items-center gap-3`}
                            >
                              <CircleDashed strokeWidth={1.5} size={20} />
                              <div className="group-hover:underline">
                                {subitem.name}
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={item.url}
                  href={item.url}
                  className={`${pathname === item.url ? "bg-primary font-bold text-white" : "group"} mt-1 flex w-full items-center justify-between rounded-md px-2.5 py-2.5`}
                >
                  <div className={`"justify-center flex items-center gap-3`}>
                    <item.Icon strokeWidth={1.5} size={20} />
                    <div className="group-hover:underline">{item.name}</div>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </Accordion>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
