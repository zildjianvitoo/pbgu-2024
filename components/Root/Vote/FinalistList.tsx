"use client";

import { getAllFinalists } from "@/lib/network/finalist";
import { FinalistType } from "@/lib/types/finalist";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { VoteFinalistCard } from "./VoteFinalistCard";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useEffect, useState } from "react";

function FinalistByGender({
  gender,
  finalist,
}: {
  gender: string;
  finalist: FinalistType[];
}) {
  return (
    <div className="mx-auto w-full space-y-3 pb-12 lg:space-y-6">
      <div className="font-evogria flex flex-col items-center gap-3 text-center capitalize">
        <h2 className="text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
          VOTE {gender}
        </h2>
        <div className="flex items-center gap-2">
          <div className="h-0.5 w-20 bg-secondary lg:w-40" />
          <div className="h-1.5 w-5 bg-primary lg:w-10" />
          <div className="h-0.5 w-20 bg-secondary lg:w-40" />
        </div>
        {/* <h3 className="text-tertiary text-end text-3xl font-medium md:text-4xl lg:text-start lg:text-5xl">
          TAHUN {new Date().getFullYear()} /{" "}
          {Number(new Date().getFullYear()) + 1}
        </h3> */}
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

  const [filteredPutera, setFilteredPutera] = useState<
    FinalistType[] | undefined
  >();
  const [filteredPuteri, setFilteredPuteri] = useState<
    FinalistType[] | undefined
  >();

  useEffect(() => {
    if (peserta) {
      setFilteredPutera(
        peserta.filter((alumni) => alumni.gender === "laki-laki") || [],
      );
      setFilteredPuteri(
        peserta.filter((alumni) => alumni.gender === "perempuan"),
      );
    }
  }, [peserta]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLocaleLowerCase();

    const filteredPutera = peserta?.filter(
      (alumni) =>
        alumni.gender === "laki-laki" &&
        alumni.name.toLocaleLowerCase().includes(value),
    );
    const filteredPuteri = peserta?.filter(
      (alumni) =>
        alumni.gender === "perempuan" &&
        alumni.name.toLocaleLowerCase().includes(value),
    );

    setFilteredPutera(filteredPutera || []);
    setFilteredPuteri(filteredPuteri || []);
  };

  return (
    <section id="vote-bgu" className="mx-auto w-full px-6 py-14 lg:px-24">
      <div className="flex w-full flex-col gap-12">
        <Input
          type="text"
          placeholder="Cari peserta berdasarkan nama"
          className="bfocus:outline-primary w-full border-primary md:w-1/3 lg:w-1/5"
          onChange={handleFilterChange}
        />
        <Tabs defaultValue="semua" className="w-full">
          <TabsList className="flex w-full justify-around bg-white pb-8 md:pb-14">
            <TabsTrigger className="w-full text-xl md:text-2xl" value="semua">
              Semua
            </TabsTrigger>
            <TabsTrigger className="w-full text-xl md:text-2xl" value="bujang">
              Bujang
            </TabsTrigger>
            <TabsTrigger className="w-full text-xl md:text-2xl" value="gadis">
              Gadis
            </TabsTrigger>
          </TabsList>
          <TabsContent value="semua">
            <FinalistByGender
              gender={"BUJANG"}
              finalist={filteredPutera || []}
            />
            <FinalistByGender
              gender={"GADIS"}
              finalist={filteredPuteri || []}
            />
          </TabsContent>
          <TabsContent value="bujang">
            <FinalistByGender
              gender={"BUJANG"}
              finalist={filteredPutera || []}
            />
          </TabsContent>
          <TabsContent value="gadis">
            <FinalistByGender
              gender={"GADIS"}
              finalist={filteredPuteri || []}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
