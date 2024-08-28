import FormalEducation from "@/components/Dashboard/Pendidikan/FormalEducation";
import InformalEducation from "@/components/Dashboard/Pendidikan/InformalEducation";

export default async function Pendidikan() {
  return (
    <section className="flex w-full flex-col gap-4 pb-6 lg:gap-6">
      <FormalEducation />
      <InformalEducation />
    </section>
  );
}
