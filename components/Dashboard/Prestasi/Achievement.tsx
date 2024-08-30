"use client";

import AchievementTable from "./AchievementTable";
import CreateAchievement from "./CreateAchievement";

export default function Achievement() {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Prestasi yang Pernah Diraih
        </h2>
        <p className="text-sm lg:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad corporis
          nisi iste?
        </p>
      </div>

      <AchievementTable />

      <CreateAchievement />
    </div>
  );
}
