import Achievement from "@/components/Dashboard/Prestasi/Achievement";
import Competence from "@/components/Dashboard/Prestasi/Competence";
import OrganizationalExperience from "@/components/Dashboard/Prestasi/OrganizationalExperience";
import { Button } from "@/components/ui/button";
import { FileDown, GraduationCap, SquareUserRound } from "lucide-react";
import Link from "next/link";

export default async function Pendidikan() {
  return (
    <section className="flex w-full flex-col gap-4 pb-6 lg:gap-6">
      <Competence />
      <OrganizationalExperience />
      <Achievement />
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
              <GraduationCap />
              Data Pendidikan
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
