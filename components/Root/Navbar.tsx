"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";
import { toast } from "sonner";
import NavbarMobile from "./NavbarMobile";
import { Button } from "../ui/button";

const links = [
  {
    name: "Beranda",
    path: "/",
  },
  {
    name: "Tentang BGU",
    path: "/tentang-bgu",
  },
  {
    name: "Kegiatan",
    path: "/kegiatan",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { data } = useSession();
  const router = useRouter();

  function handleLogout() {
    router.push("/");
    signOut();
    toast.success("Logged Out successfully!");
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full items-center glass-nav justify-between px-6 py-3 transition lg:px-24 lg:py-5",
        { "bg-stone-50 shadow-sm": isScrolled }
      )}
    >
      <figure className="relative h-12 w-40 lg:h-14 lg:w-48">
        <Image
          src="/images/logo-pln-hp.png"
          alt="Logo"
          fill
          className="object-contain object-center lg:object-bottom"
        />
      </figure>
      <div className="block lg:hidden">
        <NavbarMobile links={links} />
      </div>

      <div className="hidden items-center gap-6 lg:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={cn(
              "border-b-2 border-transparent text-lg text-white/80 transition hover:border-primary",
              pathname === link.path
                ? "font-bold text-primary"
                : "font-medium ",
              pathname !== "/" &&
                pathname !== link.path &&
                !isScrolled &&
                "text-white"
            )}
          >
            {link.name}
          </Link>
        ))}
        <div className="hidden items-center gap-3 lg:flex">
          {data?.user ? (
            <>
              <Link href="/dashboard">
                <Button
                  variant="outline"
                  className="rounded-full border-2 border-primary bg-transparent px-9 text-primary hover:bg-primary hover:text-background"
                >
                  Dashboard
                </Button>
              </Link>

              <Button
                onClick={handleLogout}
                variant="outline"
                className="rounded-full border-2 border-primary bg-transparent p-4 text-primary hover:bg-primary hover:text-background"
              >
                <LogOut />
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button
                variant="outline"
                className="flex items-center gap-3 rounded-full border-2 border-primary bg-transparent px-9 text-base text-primary hover:bg-primary hover:text-background"
              >
                Daftar
                <LogIn size={20} />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
