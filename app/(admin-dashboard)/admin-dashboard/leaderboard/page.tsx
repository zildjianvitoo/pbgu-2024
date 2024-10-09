"use client";

import { LeaderboardChart } from "@/components/AdminDashboard/Leaderboard/LeaderboardChart";
import { getAllFinalists } from "@/lib/network/finalist";
import { useQuery } from "@tanstack/react-query";

export default function PersertaDashboard() {
  const { data: peserta } = useQuery({
    queryFn: getAllFinalists,
    queryKey: ["participants"],
  });

  const calonPutera = peserta?.filter(
    (alumni) => alumni.gender === "laki-laki",
  );
  const calonPuteri = peserta?.filter(
    (alumni) => alumni.gender === "perempuan",
  );

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}

      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard / </span>
        <span>Leaderboard</span>
      </div>

      <div className="mt-6 flex gap-12">
        <LeaderboardChart
          gender={"laki-laki"}
          participants={calonPutera || []}
        />
        <LeaderboardChart
          gender={"perempuan"}
          participants={calonPuteri || []}
        />
      </div>
    </section>
  );
}
