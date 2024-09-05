import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/formatDate";
import { ActivityType } from "@/lib/types/activity";
import Image from "next/image";
import Link from "next/link";

interface ActivitiesProps {
  searchTitle?: string;
  activities: ActivityType[];
}

export default function Activities({
  searchTitle,
  activities,
}: ActivitiesProps) {
  return (
    <section
      id="daftar-kegiatan"
      className="relative space-y-6 overflow-hidden px-6 pb-12 pt-12 lg:gap-y-0 lg:space-y-12 lg:px-24"
    >
      <div className="flex items-center justify-between">
        {!searchTitle && (
          <div className="w-1/2 space-y-2">
            <Separator className="h-1 w-[90%] bg-background" />
            <Separator className="h-1 bg-secondary" />
          </div>
        )}

        {searchTitle ? (
          <h2 className="text-3xl font-bold text-background md:text-4xl lg:text-5xl">
            Pencarian : <span className="text-secondary">{searchTitle}</span>
          </h2>
        ) : (
          <h2 className="text-end text-3xl font-bold text-background md:text-4xl lg:text-5xl">
            Kegiatan BGU <span className="text-secondary">Lainnya</span>
          </h2>
        )}
      </div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-24">
        {activities.map((activity) => (
          <Link
            href={`/kegiatan/${activity.slug}`}
            key={activity.id}
            className="cursor-pointer space-y-3 rounded-md outline outline-offset-8 outline-transparent transition-all duration-300 hover:outline-secondary"
          >
            <figure className="relative aspect-video w-full overflow-hidden rounded-sm">
              <Image
                src={activity.image as string}
                alt="kegiatan"
                fill
                className="z-10 object-cover object-center"
              />
            </figure>
            <div className="space-y-2 lg:space-y-3">
              <h3 className="line-clamp-2 text-xl font-semibold text-background lg:text-2xl">
                {activity.title}
              </h3>
              <p
                className="line-clamp-2 text-sm text-background/80"
                dangerouslySetInnerHTML={{ __html: activity?.content }}
              />
              <p className="font-semibold text-secondary">
                {formatDate(activity.createdAt)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
