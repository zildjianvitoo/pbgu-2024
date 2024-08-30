"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import CreateInformalEducation from "./CreateInformalEducation";
import InformalEducationTable from "./InformalEducationTable";

export default function InformalEducation() {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Pendidikan Non-Formal
        </h2>
        <p className="text-sm lg:text-base">
          Isi data pendidikan non-formal Kamu
        </p>
      </div>

      <InformalEducationTable />

      <CreateInformalEducation />
    </div>
  );
}
