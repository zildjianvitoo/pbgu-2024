import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const words1 = [
    {
      text: "Pemilihan",
    },
    {
      text: "Bujang",
    },
    {
      text: "Gadis",
    },
  ];

  const words2 = [
    {
      text: "Universitas",
      className: "text-primary  mt-2",
    },
    {
      text: "Sriwijaya",
      className: "text-primary  mt-2",
    },
    {
      text: "2024",
      className: "text-primary ",
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden py-40 md:py-64">
      <Image
        src="/images/hero-image.jpeg"
        alt="gambar hero"
        fill
        className="absolute -z-20 object-cover"
        loading="eager"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black/60" />
      <div className="container z-20 m-auto flex flex-col items-center justify-center max-sm:mt-16">
        <h1 className="text-center font-nexaScript text-4xl font-bold text-white lg:text-5xl xl:text-7xl">
          <TypewriterEffect words={words1} cursorClassName="bg-white" />
          <TypewriterEffect words={words2} />
          {/* <span className="">
            <span className=""></span>
          </span> */}
        </h1>
        <h3 className="mb-5 mt-3 text-center text-xl font-medium text-white">
          Segerakan daftarkan diri anda menjadi salah satu bagian dari kami!
        </h3>
        <div className="mt-3 flex gap-5">
          <Link href={"/tentang-bgu"}>
            <Button
              variant={"ghost"}
              className="h-12 rounded-full border border-primary text-lg font-medium text-white hover:bg-primary hover:text-white md:text-xl"
            >
              Tentang BGU
            </Button>
          </Link>
          <Link href={"/daftar"}>
            <Button className="h-12 rounded-full text-lg font-medium md:text-xl">
              Daftar Sekarang!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
