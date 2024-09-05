"use client";

import GeneralInformation from "@/components/Dashboard/DataDiri/GeneralInformation";
import PersonalInformation from "@/components/Dashboard/DataDiri/PersonalInformation";
import { Button } from "@/components/ui/button";
import { Award, FileDown, GraduationCap, Medal } from "lucide-react";
import Link from "next/link";

export default function DataDiri() {
  return (
    <section className="flex w-full flex-col gap-4 pb-6 lg:gap-6">
      <GeneralInformation />
      <PersonalInformation />
      <div className="space-y-6">
        <p className="text-lg text-primary">Lanjut Mengisi Data :</p>
        <div className="flex flex-col gap-3 lg:flex-row">
          <Link href="/dashboard/pendidikan">
            <Button className="flex items-center gap-3">
              <GraduationCap />
              Data Pendidikan
            </Button>
          </Link>

          <Link href="/dashboard/prestasi">
            <Button className="flex items-center gap-3">
              <Award />
              Data Prestasi
            </Button>
          </Link>
          <Link href="/dashboard/unduh-formulir">
            <Button
              variant="secondary"
              className="flex items-center gap-3 text-white"
            >
              <FileDown />
              Unduh Formulir
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
