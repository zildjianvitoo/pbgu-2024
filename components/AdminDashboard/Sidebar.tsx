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
    url: "/dashboard",
    Icon: Home,
  },
  {
    name: "Akun",
    url: "/dashboard/akun",
    Icon: User,
  },
  {
    name: "Layanan",
    url: "/dashboard/layanan",
    Icon: ListChecks,
    children: [
      {
        name: "Buku Tamu",
        url: "/dashboard/layanan/buku-tamu",
      },
      {
        name: "Pendaftaran",
        url: "/dashboard/layanan/pendaftaran",
      },
      {
        name: "Toko Online",
        url: "/dashboard/layanan/toko-online",
      },
    ],
  },
  {
    name: "Berita",
    url: "/dashboard/berita",
    Icon: Newspaper,
  },
  {
    name: "Informasi Publik",
    url: "/dashboard/informasi-publik",
    Icon: BarChartBig,
    children: [
      {
        name: "Data Penempatan",
        url: "/dashboard/informasi-publik/data-penempatan",
      },
      {
        name: "Data Perlindugan",
        url: "/dashboard/informasi-publik/data-perlindungan",
      },
      {
        name: "Data Pengaduan",
        url: "/dashboard/informasi-publik/data-pengaduan",
      },
      {
        name: "Data Demand & Supply",
        url: "/dashboard/informasi-publik/data-demand-supply",
      },
      {
        name: "Data P3MI",
        url: "/dashboard/informasi-publik/data-p3mi",
      },
      {
        name: "Informasi Loker",
        url: "/dashboard/informasi-publik/info-loker",
      },
      {
        name: "Sosialisasi",
        url: "/dashboard/informasi-publik/sosialisasi",
      },
      {
        name: "Pengumuman",
        url: "/dashboard/informasi-publik/pengumuman",
      },
    ],
  },
  {
    name: "Inovasi Kami",
    url: "/dashboard/inovasi-kami",
    Icon: Lightbulb,
    children: [
      {
        name: "Balek Dusun",
        url: "/dashboard/inovasi-kami/balek-dusun",
      },
      {
        name: "Apo Lokak",
        url: "/dashboard/inovasi-kami/apo-lokak",
      },
    ],
  },
  {
    name: "Kategori Data",
    url: "/dashboard/kategori",
    Icon: BookCopy,
    children: [
      {
        name: "Negara Penempatan",
        url: "/dashboard/kategori/negara-penempatan",
      },
      {
        name: "Asal Kota/Kabupaten",
        url: "/dashboard/kategori/asal-kabupaten",
      },
      {
        name: "Skema Penempatan",
        url: "/dashboard/kategori/skema-penempatan",
      },
      {
        name: "Posisi/Jabatan",
        url: "/dashboard/kategori/posisi",
      },
      {
        name: "Sektor Demand",
        url: "/dashboard/kategori/sektor-demand-supply",
      },
      {
        name: "Provinsi",
        url: "/dashboard/kategori/provinsi",
      },
      {
        name: "Alasan Kepulangan",
        url: "/dashboard/kategori/alasan-kepulangan",
      },
      {
        name: "Staff BP3MI",
        url: "/dashboard/kategori/staff-bp3mi",
      },
    ],
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
                    className={`flex w-full items-center justify-between rounded-md px-2.5 py-2.5 duration-300 hover:bg-slate-100`}
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
                            className={`${pathname === subitem.url ? "bg-primary text-white shadow-md" : "hover:bg-slate-100"} mt-1 flex w-full items-center justify-between rounded-md px-2.5 py-2.5 duration-300`}
                          >
                            <div
                              className={`"justify-center flex items-center gap-3`}
                            >
                              <CircleDashed strokeWidth={1.5} size={20} />
                              <div>{subitem.name}</div>
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
                  className={`${pathname === item.url ? "bg-primary text-white shadow-md" : "hover:bg-slate-100"} mt-1 flex w-full items-center justify-between rounded-md px-2.5 py-2.5 duration-300`}
                >
                  <div className={`"justify-center flex items-center gap-3`}>
                    <item.Icon strokeWidth={1.5} size={20} />
                    <div>{item.name}</div>
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
