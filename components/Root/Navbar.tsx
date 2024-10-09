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
    name: "Vote",
    path: "/vote",
  },
  {
    name: "Leaderboard",
    path: "/leaderboard",
  },
  {
    name: "Tentang BGU",
    path: "/#tentang-bgu",
  },
  {
    name: "Kegiatan",
    path: "/kegiatan",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [afterHero, setAfterHero] = useState(false);
  const pathname = usePathname();
  const { data } = useSession();
  const router = useRouter();

  async function handleLogout() {
    await signOut();
    router.push("/");
    toast.success("Log Out berhasil!");
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (scrollPosition > viewportHeight - 10) {
        setIsScrolled(false);
        setAfterHero(true);
      } else {
        setAfterHero(false);
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
        "fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-3 transition lg:px-24 lg:py-2",
        { "glass-nav bg-stone-50 shadow-sm": isScrolled },
        { "bg-white shadow-sm": afterHero },
      )}
    >
      <div className="flex items-center gap-2">
        <Link href={"/"} className="relative size-14 lg:size-[72px]">
          <Image
            src="/images/logo-unsri.png"
            alt="Logo UNSRI"
            fill
            className="object-contain object-center lg:object-bottom"
          />
        </Link>
        <Link href={"/"} className="relative size-14 lg:size-[72px]">
          <Image
            src="/images/logo-ibgu.png"
            alt="Logo IBGU"
            fill
            className="object-contain object-center lg:object-bottom"
          />
        </Link>
      </div>
      {/* <p className="font-nexaScript text-3xl text-secondary lg:hidden">IBGU</p> */}
      <div className="flex gap-3 lg:hidden">
        <Link href="/vote">
          <Button
            variant="outline"
            className={cn(
              "flex items-center gap-3 rounded-full border-2 border-white bg-transparent px-9 text-base text-primary text-white hover:bg-primary hover:text-background",
              { "border-primary bg-primary": afterHero },
            )}
          >
            Vote
            {/* <LogIn size={20} /> */}
          </Button>
        </Link>
        <NavbarMobile links={links} />
      </div>

      <div className="hidden items-center gap-9 lg:flex">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={cn(
              "border-b-2 border-transparent text-xl text-white/80 transition hover:border-secondary",
              { "text-foreground": afterHero },
              pathname === link.path
                ? "font-medium text-secondary"
                : "font-medium",
              pathname !== "/" &&
                pathname !== link.path &&
                !isScrolled &&
                "text-white",
            )}
          >
            {link.name}
          </Link>
        ))}
        <div className="hidden items-center gap-3 lg:flex">
          {/* {data?.user ? (
            <>
              <Link href="/dashboard/data-diri">
                <Button
                  variant="outline"
                  className={cn(
                    "rounded-full border-2 border-white bg-transparent px-9 text-white hover:bg-primary hover:text-background",
                    { "border-primary text-primary": afterHero },
                  )}
                >
                  Dashboard
                </Button>
              </Link>

              <Button
                onClick={handleLogout}
                variant="outline"
                className={cn(
                  "rounded-full border-2 border-white bg-transparent p-4 text-white hover:bg-primary hover:text-background",
                  { "border-primary text-primary": afterHero },
                )}
              >
                <LogOut />
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button
                variant="outline"
                className={cn(
                  "flex items-center gap-3 rounded-full border-2 border-white bg-transparent px-9 text-base text-primary text-white hover:bg-primary hover:text-background",
                  { "border-primary bg-primary": afterHero },
                )}
              >
                Login
                <LogIn size={20} />
              </Button>
            </Link>
          )} */}

          <Link href="/vote">
            <Button
              variant="outline"
              className={cn(
                "flex items-center gap-3 rounded-full border-2 border-white bg-transparent px-9 text-base text-primary text-white hover:bg-primary hover:text-background",
                { "border-primary bg-primary": afterHero },
              )}
            >
              Vote
              {/* <LogIn size={20} /> */}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
