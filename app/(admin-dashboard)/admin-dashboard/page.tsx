"use client";

import RegistrantTable from "@/components/AdminDashboard/RegistrantTable";
import { registrantColumn } from "@/lib/columns/registrant-column";
import { getAllUserGeneralInfos } from "@/lib/network/user-general-info";
import { useQuery } from "@tanstack/react-query";
import { UserStatistic } from "@/components/AdminDashboard/UserStatistic";

export default function Dashboard() {
  const { data: userGeneralInfo } = useQuery({
    queryFn: () => getAllUserGeneralInfos(),
    queryKey: ["user-general-infos"],
  });

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard /</span>
        <span>Daftar Pendaftar</span>
      </div>

      {/* Data Statistic */}
      {userGeneralInfo && <UserStatistic userGeneralInfo={userGeneralInfo} />}

      <RegistrantTable
        columns={registrantColumn}
        data={userGeneralInfo || []}
      />
    </section>
  );
}
