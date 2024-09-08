import Activities from "@/components/Root/Kegiatan/Activities";
import Header from "@/components/Root/Kegiatan/Header";
import RecentActivity from "@/components/Root/Kegiatan/RecentActivity";
import { getAllActivities } from "@/lib/network/activity";
import Image from "next/image";

export default async function Kegiatan({
  searchParams,
}: {
  searchParams: { title: string | undefined };
}) {
  const titleFilter = searchParams.title || "";

  const activities = await getAllActivities();
  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(titleFilter.toLowerCase()),
  );

  const recentActivity = activities[0];

  const allActivitiesExceptFirst = activities.slice(1);

  return (
    <section className="relative min-h-screen overflow-hidden py-20 md:py-32">
      <Image
        src="/images/bg-hero.png"
        alt="bg hero"
        fill
        className="absolute -z-20 object-cover"
        loading="eager"
      />
      <Image
        src="/images/texture.png"
        alt="texture"
        fill
        className="absolute object-cover opacity-10"
        loading="eager"
      />
      <Header />
      {titleFilter.length === 0 && (
        <RecentActivity recentActivity={recentActivity} />
      )}
      <Activities
        searchTitle={titleFilter}
        activities={titleFilter ? filteredActivities : allActivitiesExceptFirst}
      />
    </section>
  );
}
