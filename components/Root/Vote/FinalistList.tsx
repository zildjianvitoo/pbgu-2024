"use client";

import { getAllFinalists } from "@/lib/network/finalist";
import { FinalistType } from "@/lib/types/finalist";

import { useQuery } from "@tanstack/react-query";
import { VoteFinalistCard } from "./VoteFinalistCard";

function FinalistByGender({
  gender,
  finalist,
}: {
  gender: string;
  finalist: FinalistType[];
}) {
  return (
    <div className="mx-auto w-full space-y-3 lg:space-y-6">
      <div className="font-evogria flex flex-col items-center gap-3 text-center capitalize">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
          CALON {gender}
        </h2>
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-20 bg-secondary lg:w-40" />
          <div className="h-1.5 w-5 bg-primary lg:w-10" />
          <div className="h-0.5 w-20 bg-secondary lg:w-40" />
        </div>
        <h3 className="text-tertiary text-end text-3xl font-medium md:text-4xl lg:text-start lg:text-5xl">
          TAHUN {new Date().getFullYear()} /{" "}
          {Number(new Date().getFullYear()) + 1}
        </h3>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:flex-row lg:gap-9 xl:grid-cols-5">
        {finalist.map((participant) => (
          <VoteFinalistCard key={participant.id} finalist={participant} />
        ))}
      </div>
    </div>
  );
}

export default function FinalistList() {
  const { data: peserta } = useQuery({
    queryFn: getAllFinalists,
    queryKey: ["finalist"],
  });

  const calonPutera = peserta?.filter(
    (alumni) => alumni.gender === "laki-laki",
  );
  const calonPuteri = peserta?.filter(
    (alumni) => alumni.gender === "perempuan",
  );

  return (
    <section
      id="alumni-ppump"
      className="mx-auto w-full px-6 py-14 lg:space-y-24 lg:px-24"
    >
      <FinalistByGender gender={"PUTERA"} finalist={calonPutera || []} />
      <FinalistByGender gender={"PUTERI"} finalist={calonPuteri || []} />
    </section>
  );
}
