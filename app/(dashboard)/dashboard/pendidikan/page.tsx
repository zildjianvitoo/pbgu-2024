import FormalEducation from "@/components/Dashboard/Pendidikan/FormalEducation";
import InformalEducation from "@/components/Dashboard/Pendidikan/InformalEducation";
import { Button } from "@/components/ui/button";
import { Award, FileDown, Medal, SquareUserRound } from "lucide-react";
import Link from "next/link";

export default async function Pendidikan() {
  return (
    <section className="flex w-full flex-col gap-4 pb-6 lg:gap-6">
      <FormalEducation />
      <InformalEducation />
      <div className="space-y-6">
        <p className="text-lg text-primary">Lanjut Mengisi Data :</p>
        <div className="flex flex-col gap-3 lg:flex-row">
          <Link href="/dashboard/data-diri">
            <Button className="flex items-center gap-3">
              <SquareUserRound />
              Data Diri
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
