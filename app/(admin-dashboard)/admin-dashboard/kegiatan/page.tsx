"use client";
import ActivityTable from "@/components/AdminDashboard/Kegiatan/ActivityTable";
import { activityColumn } from "@/lib/columns/activity-column";
import { getAllActivities } from "@/lib/network/activity";
import { useQueries, useQuery } from "@tanstack/react-query";

export default function ActivityDashboard() {
  const { data: activities } = useQuery({
    queryKey: ["activities"],
    queryFn: getAllActivities,
  });

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard /</span>
        <span>Daftar Kegiatan</span>
      </div>

      <ActivityTable columns={activityColumn} data={activities || []} />
    </section>
  );
}
