"use client";

import { LeaderboardChart } from "@/components/AdminDashboard/Leaderboard/LeaderboardChart";
import VotingStatus from "@/components/AdminDashboard/Leaderboard/VotingStatus";
import {
  getAllLeaderboardBujang,
  getAllLeaderboardGadis,
} from "@/lib/network/leaderboard";
import { useQuery } from "@tanstack/react-query";

export default function PersertaDashboard() {
  const { data: leaderboardBujang } = useQuery({
    queryFn: getAllLeaderboardBujang,
    queryKey: ["leaderboard-bujangs"],
  });

  const { data: leaderboardGadis } = useQuery({
    queryFn: getAllLeaderboardGadis,
    queryKey: ["leaderboard-gadis"],
  });

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}

      <div className="flex flex-col items-center justify-between gap-y-3 lg:flex-row">
        <div className="flex gap-1 text-2xl capitalize">
          <span className="text-gray-400">Dashboard / </span>
          <span>Leaderboard</span>
        </div>
        <VotingStatus />
      </div>

      <div className="mt-6 flex flex-col gap-12 lg:flex-row">
        <LeaderboardChart
          gender={"laki-laki"}
          leaderboard={leaderboardBujang || []}
        />
        <LeaderboardChart
          gender={"perempuan"}
          leaderboard={leaderboardGadis || []}
        />
      </div>
    </section>
  );
}
