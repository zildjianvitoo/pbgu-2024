"use client";
import FinalistList from "@/components/AdminDashboard/Finalis/FinalistList";
import { Button } from "@/components/ui/button";
import { getAllFinalists } from "@/lib/network/finalist";
import { useQuery } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function ActivityDashboard() {
  const { data: finalist } = useQuery({
    queryKey: ["finalists"],
    queryFn: getAllFinalists,
  });

  const calonBujang = finalist?.filter(
    (alumni) => alumni.gender === "laki-laki",
  );
  const calonPuteri = finalist?.filter(
    (alumni) => alumni.gender === "perempuan",
  );

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div className="flex gap-1 text-2xl capitalize">
          <span className="text-gray-400">Dashboard /</span>
          <span>Finalis</span>
        </div>
        <Link
          href="/admin-dashboard/finalis/tambah"
          className="self-end lg:self-auto"
        >
          <Button className="items-center gap-3">
            <PlusCircle className="h-5 w-5" />
            <span className="lg:text-lg">Tambah Finalis</span>
          </Button>
        </Link>
      </div>

      <div className="mt-6 w-full space-y-24 overflow-hidden">
        <FinalistList gender={"BUJANG"} finalists={calonBujang || []} />
        <FinalistList gender={"GADIS"} finalists={calonPuteri || []} />
      </div>
    </section>
  );
}
