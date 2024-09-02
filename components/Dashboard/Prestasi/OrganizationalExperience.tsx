import { getUserOrganizationalExperiencesByUserId } from "@/lib/network/user-organizational-experience";
import CreateOrganizationalExperience from "./CreateOrganizationalExperience";
import OrganizationalExperienceTable from "./OrganizationalExperienceTable";
import { auth } from "@/auth";

export default async function OrganizationalExperience() {
  const session = await auth();
  const userId = session?.user.id;
  const data = await getUserOrganizationalExperiencesByUserId(userId!);

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Pengalaman Organisasi
        </h2>
        <p className="text-sm lg:text-base">
          Isi data pengalaman dan organisasi Kamu (Maksimal 5)
        </p>
      </div>

      <OrganizationalExperienceTable
        organizationalExperiences={data}
        userId={userId!}
      />

      <CreateOrganizationalExperience
        organizationalExperiencesLength={data.length || 0}
      />
    </div>
  );
}
