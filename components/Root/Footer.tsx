import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const resourcesLinks = [
  {
    label: "Beranda",
    link: "/",
  },
  {
    label: "Tentang BGU",
    link: "/#tentang-bgu",
  },
  {
    label: "Kegiatan",
    link: "/kegiatans",
  },
];

const categoryLink = [
  {
    label: "Vote",
    link: "/vote",
  },
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Finalis",
    link: "/finalis",
  },
];

const socialMediaLinks = [
  {
    link: "https://www.instagram.com/bgunsri",
    Icon: RiInstagramFill,
  },
  {
    link: "#",
    Icon: RiFacebookFill,
  },
  {
    link: "#",
    Icon: RiTwitterXFill,
  },
  {
    link: "#",
    Icon: RiWhatsappFill,
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bottom-0 left-0 rounded-t-[40px] border-t bg-primary pb-4 pt-12"
    >
      <div className="flex flex-col gap-6 px-6 lg:px-24">
        <div className="relative mx-auto flex w-full flex-col gap-6 lg:flex-row">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <figure className="relative size-16">
                <Image
                  src="/images/logo-ibgu.png"
                  alt="Logo PLN HP"
                  fill
                  className="object-contain"
                />
              </figure>
              <p className="text-4xl font-bold text-primary-foreground">
                IBG Unsri
              </p>
            </div>
            <div className="space-y-3 text-primary-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="size-6" strokeWidth={1.8} />
                <p className="text-lg">UNSRI, Sumatera Selatan</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-6" strokeWidth={1.8} />
                <p className="text-lg">bgu.unsri@gmail.com</p>
              </div>
              {/* <div className="flex items-center gap-3">
                <Phone className="size-6" strokeWidth={1.8} />
                <p className="text-lg">+62 812-2393-4384</p>
              </div> */}
            </div>

            <ul className="flex gap-2 md:gap-4">
              {socialMediaLinks.map((link, index) => (
                <a
                  href={link.link}
                  key={index}
                  className="grid size-10 place-items-center rounded-full border text-primary-foreground duration-200 hover:opacity-75"
                >
                  <link.Icon className="size-6" />
                </a>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex w-full flex-1 flex-col justify-end gap-8 tracking-wide max-lg:justify-between md:flex-row lg:gap-14 xl:gap-28">
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="text-lg font-bold text-primary-foreground lg:text-xl">
                RESOURCES
              </h4>
              <ul className="flex flex-col gap-2 text-base text-slate-500 md:gap-4 md:text-lg">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.link}
                      className="text-primary-foreground duration-200 hover:opacity-75"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <h4 className="text-lg font-bold text-primary-foreground lg:text-xl">
                FEATURES
              </h4>
              <ul className="flex flex-col gap-2 text-base text-slate-500 md:gap-4 md:text-lg">
                {categoryLink.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.link}
                      className="text-primary-foreground duration-200 hover:opacity-75"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex w-full justify-between">
          <small className="text-base font-medium text-primary-foreground">
            &copy; Copyright 2024 Team Pake Nanya . All rights reserved.
          </small>
          <small className="cursor-pointer text-base font-medium text-primary-foreground transition hover:opacity-80">
            Terms and Conditions
          </small>
        </div>
      </div>
    </footer>
  );
}
