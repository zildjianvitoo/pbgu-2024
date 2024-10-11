"use client";

import { LeaderboardChart } from "@/components/AdminDashboard/Leaderboard/LeaderboardChart";
import { getAllLeaderboard } from "@/lib/network/leaderboard";
import { useQuery } from "@tanstack/react-query";

export default function PersertaDashboard() {
  const { data: leaderboards } = useQuery({
    queryFn: getAllLeaderboard,
    queryKey: ["leaderboard"],
  });

  const calonBujang = leaderboards?.filter(
    (alumni) => alumni.gender === "laki-laki",
  );
  const calonGadis = leaderboards?.filter(
    (alumni) => alumni.gender === "perempuan",
  );

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}

      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard / </span>
        <span>Leaderboard</span>
      </div>

      <div className="mt-6 flex flex-col gap-12 lg:flex-row">
        <LeaderboardChart
          gender={"laki-laki"}
          leaderboard={calonBujang || []}
        />
        <LeaderboardChart gender={"perempuan"} leaderboard={calonGadis || []} />
      </div>
    </section>
  );
}
