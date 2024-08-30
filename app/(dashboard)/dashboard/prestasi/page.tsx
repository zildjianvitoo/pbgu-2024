import Achievement from "@/components/Dashboard/Prestasi/Achievement";
import Competence from "@/components/Dashboard/Prestasi/Competence";
import OrganizationalExperience from "@/components/Dashboard/Prestasi/OrganizationalExperience";

export default async function Pendidikan() {
  return (
    <section className="flex w-full flex-col gap-4 pb-6 lg:gap-6">
      <Competence />
      <OrganizationalExperience />
      <Achievement />
    </section>
  );
}
