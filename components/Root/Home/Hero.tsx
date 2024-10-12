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
      <Image
        src="/images/texture.png"
        alt="texture"
        fill
        className="absolute z-[2] object-cover opacity-10"
        loading="eager"
      />
      <figure className="flex flex-col items-center justify-center">
        <Image
          src="/images/icon-pbgu-hero.png"
          alt="icon pbgu hero"
          width={700}
          height={400}
          className="absolute top-1/2 z-[30] mx-auto sm:bottom-[18%]"
          loading="eager"
        />
        <div className="absolute bottom-[20%] z-[30] mx-auto flex gap-5 sm:bottom-[8%] lg:bottom-[10%]">
          <Link href={"/beli-voucher"}>
            <Button
              variant={"ghost"}
              className="h-12 rounded-full border border-[#f1f1f1] text-lg font-medium text-white hover:bg-primary hover:text-white md:text-xl"
            >
              Beli Voucher
            </Button>
          </Link>
          <Link href={"/vote"}>
            <Button className="h-12 rounded-full text-lg font-medium max-sm:border max-sm:border-white md:text-xl">
              Vote Sekarang!
            </Button>
          </Link>
        </div>
      </figure>

      <div className="absolute bottom-[27%] z-10 hidden h-full w-full bg-gradient-to-t from-black to-transparent to-[10%] lg:block" />
      {/* <div className="absolute left-0 top-0 -z-10 h-full w-full bg-primary object-cover" /> */}
      <div className="absolute bottom-0 left-0 z-10 hidden h-[27%] w-full bg-black lg:block" />
      <figure className="relative z-[5] flex w-fit items-center justify-center max-sm:top-1/4 max-sm:m-auto md:bottom-24 md:mx-auto lg:bottom-44 xl:bottom-52">
        <Image
          src={"/images/bgu23.png"}
          alt="bgu 23"
          width={1000}
          height={800}
          quality={100}
          loading="eager"
        />
      </figure>
      <figure className="relative"></figure>
      <div className="container z-20 m-auto flex flex-col items-center justify-center max-lg:hidden max-sm:mt-16">
        {/* <h1 className="text-center font-nexaScript text-4xl font-bold text-white lg:text-5xl xl:text-7xl">
          <TypewriterEffect words={words1} cursorClassName="bg-white" />
          <TypewriterEffect words={words2} />
        </h1> */}
        {/* <h3 className="mb-5 mt-3 text-center text-xl font-medium text-white">
          Segerakan daftarkan diri anda menjadi salah satu bagian dari kami!
        </h3> */}

        {/* <div className="mt-3 flex gap-5">
          <Link href={"/tentang-bgu"}>
            <Button
              variant={"ghost"}
              className="h-12 rounded-full border border-white text-lg font-medium text-white hover:bg-primary hover:text-white md:text-xl"
            >
              Tentang BGU
            </Button>
          </Link>
          <Link href={"/daftar"}>
            <Button className="h-12 rounded-full text-lg font-medium max-sm:border max-sm:border-white md:text-xl">
              Daftar Sekarang!
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
