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
      className: "text-secondary ",
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden py-40 md:py-64">
      <Image
        src="/images/hero.svg"
        alt="gambar hero"
        fill
        className="absolute -z-20 object-cover"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black/60 " />
      <div className="container  z-20 flex flex-col justify-center max-sm:mt-16 items-center m-auto">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl text-white text-center font-bold font-nexaScript">
          <TypewriterEffect words={words1} cursorClassName="bg-white" />
          <TypewriterEffect words={words2} />
          {/* <span className="">
            <span className=""></span>
          </span> */}
        </h1>
        <h3 className="font-medium text-xl  mt-3 mb-5 text-white text-center">
          Segerakan daftarkan diri anda menjadi salah satu bagian dari kami!
        </h3>
        <div className="flex gap-3 mt-3 ">
          <Link href={"/tentang-bgu"}>
            <Button
              variant={"ghost"}
              className="font-medium text-lg md:text-xl h-12 border border-primary text-white hover:bg-primary hover:text-white"
            >
              Tentang BGU
            </Button>
          </Link>
          <Link href={"/daftar"}>
            <Button className="font-medium text-lg md:text-xl h-12">
              Daftar Sekarang!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
