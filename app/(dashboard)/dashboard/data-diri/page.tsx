"use client";

import GeneralInformation from "@/components/Dashboard/DataDiri/GeneralInformation";
import PersonalInformation from "@/components/Dashboard/DataDiri/PersonalInformation";

export default function DataDiri() {
  return (
    <section className="flex w-full flex-col gap-4 pb-6 lg:gap-6">
      <GeneralInformation />
      <PersonalInformation />
    </section>
  );
}
