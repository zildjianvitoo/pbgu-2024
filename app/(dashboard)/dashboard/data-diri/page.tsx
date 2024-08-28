import GeneralInformation from "@/components/Dashboard/DataDiri/GeneralInformation";
import PersonalInformation from "@/components/Dashboard/DataDiri/PersonalInformation";

export default async function DataDiri() {
  return (
    <section className="flex w-full flex-col gap-4 lg:gap-6 pb-6">
      <GeneralInformation />
      <PersonalInformation />
    </section>
  );
}
