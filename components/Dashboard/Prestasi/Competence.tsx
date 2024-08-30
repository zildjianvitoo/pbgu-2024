"use client";

import CompetenceTable from "./CompetenceTable";
import CreateCompetence from "./CreateCompetence";

export default function Competence() {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Kemampuan dan Kompetensi
        </h2>
        <p className="text-sm lg:text-base">
          Isi data kemampuan dan kompetensi Kamu
        </p>
      </div>

      <CompetenceTable />

      <CreateCompetence />
    </div>
  );
}
