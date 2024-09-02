import { getSession } from "next-auth/react";
import CreateInformalEducation from "./CreateInformalEducation";
import InformalEducationTable from "./InformalEducationTable";
import { auth } from "@/auth";
import { getUserInformalEducationsByUserId } from "@/lib/network/user-informal-education";

export default async function InformalEducation() {
  const session = await auth();
  const userId = session?.user.id;
  const data = await getUserInformalEducationsByUserId(userId!);

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Pendidikan Non-Formal
        </h2>
        <p className="text-sm lg:text-base">
          Isi data pendidikan non-formal Kamu (Maksimal 5)
        </p>
      </div>

      <InformalEducationTable userId={userId!} userInformalEducations={data} />

      <CreateInformalEducation
        userInformalEducationsLength={data.length || 0}
      />
    </div>
  );
}
