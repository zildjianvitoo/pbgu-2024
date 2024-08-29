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
      className: "text-secondary  mt-2",
    },
    {
      text: "Sriwijaya",
      className: "text-secondary  mt-2",
    },
    {
      text: "2024",
      className: "text-secondary ",
    },
  ];

  return (
    <section className="relative h-screen overflow-hidden py-40 md:py-64">
      <Image
        src="/images/bg-hero.png"
        alt="bg hero"
        fill
        className="absolute -z-20 object-cover"
        loading="eager"
      />
      <div className="flex-[2]">
        <Image
          src="/images/gradient-black.png"
          alt="gradient black"
          fill
          className="absolute z-20 invert"
          loading="eager"
        />
      </div>
      {/* <div className="absolute left-0 top-0 -z-10 h-full w-full bg-primary object-cover" /> */}
      <div className="absolute bottom-0 left-0 z-10 h-[20%] w-full bg-black" />
      <figure className="relative bottom-16 mx-auto flex w-fit items-center justify-center md:bottom-24 lg:bottom-32">
        <Image
          src={"/images/bgu23.png"}
          alt="bgu 23"
          width={1200}
          height={1000}
          quality={100}
          loading="eager"
        />
      </figure>
      <figure className="relative"></figure>
      <div className="container z-20 m-auto flex flex-col items-center justify-center max-sm:mt-16">
        {/* <h1 className="text-center font-nexaScript text-4xl font-bold text-white lg:text-5xl xl:text-7xl">
          <TypewriterEffect words={words1} cursorClassName="bg-white" />
          <TypewriterEffect words={words2} />
        </h1> */}
        {/* <h3 className="mb-5 mt-3 text-center text-xl font-medium text-white">
          Segerakan daftarkan diri anda menjadi salah satu bagian dari kami!
        </h3> */}

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
