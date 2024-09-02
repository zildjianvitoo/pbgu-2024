import { auth } from "@/auth";
import AchievementTable from "./AchievementTable";
import CreateAchievement from "./CreateAchievement";
import { getUserAchievementsByUserId } from "@/lib/network/user-achievement";

export default async function Achievement() {
  const session = await auth();
  const userId = session?.user.id;
  const data = await getUserAchievementsByUserId(userId!);

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Prestasi yang Pernah Diraih
        </h2>
        <p className="text-sm lg:text-base">
          Isi data prestasi yang pernah Kamu raih
        </p>
      </div>

      <AchievementTable userAchievements={data} userId={userId!} />

      <CreateAchievement userAchievementsLength={data.length} />
    </div>
  );
}
