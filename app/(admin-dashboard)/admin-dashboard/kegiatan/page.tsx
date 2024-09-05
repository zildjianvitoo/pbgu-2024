import ActivityTable from "@/components/AdminDashboard/Kegiatan/ActivityTable";
import { activityColumn } from "@/lib/columns/activity-column";
import { getAllActivities } from "@/lib/network/activity";

export default async function ActivityDashboard() {
  const activities = await getAllActivities();

  return (
    <section className="flex w-full flex-col gap-4 py-6 lg:gap-6">
      {/* Header Title */}
      <div className="flex gap-1 text-2xl capitalize">
        <span className="text-gray-400">Dashboard /</span>
        <span>Daftar Kegiatan</span>
      </div>

      <ActivityTable columns={activityColumn} data={activities} />
    </section>
  );
}
