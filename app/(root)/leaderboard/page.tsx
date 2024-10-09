"use client";

import Header from "@/components/Root/Leaderboard/Header";
import { VotingChart } from "@/components/Root/Leaderboard/VotingChart";
import { getAllFinalists } from "@/lib/network/finalist";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Leaderboard() {
  const { data: finalist } = useQuery({
    queryFn: getAllFinalists,
    queryKey: ["finalists"],
  });

  const calonBujang = finalist?.filter(
    (alumni) => alumni.gender === "laki-laki",
  );
  const calonGadis = finalist?.filter(
    (alumni) => alumni.gender === "perempuan",
  );

  return (
    <>
      <section className="relative h-[50vh] overflow-hidden py-20 md:py-40">
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
          className="absolute object-cover opacity-10"
          loading="eager"
        />
        <Header />
      </section>
      <div className="mt-6 flex flex-col gap-12 px-6 py-12 lg:flex-row lg:gap-y-0 lg:px-24">
        <VotingChart gender={"laki-laki"} finalists={calonBujang || []} />
        <VotingChart gender={"perempuan"} finalists={calonGadis || []} />
      </div>
    </>
  );
}
