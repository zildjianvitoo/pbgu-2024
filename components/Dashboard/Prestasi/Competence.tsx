import { auth } from "@/auth";
import CompetenceTable from "./CompetenceTable";
import CreateCompetence from "./CreateCompetence";
import { getUserCompetencesByUserId } from "@/lib/network/user-competence";

export default async function Competence() {
  const session = await auth();
  const userId = session?.user.id;
  const data = await getUserCompetencesByUserId(userId!);

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Kemampuan dan Kompetensi
        </h2>
        <p className="text-sm lg:text-base">
          Isi data kemampuan dan kompetensi Kamu (Maksimal 5)
        </p>
      </div>

      <CompetenceTable userCompetences={data} userId={userId!} />

      <CreateCompetence competenceLength={data.length || 0} />
    </div>
  );
}
