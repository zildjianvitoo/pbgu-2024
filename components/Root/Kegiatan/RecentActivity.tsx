import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/formatDate";
import { ActivityType } from "@/lib/types/activity";
import Image from "next/image";
import Link from "next/link";

interface RecentActivityProps {
  recentActivity: ActivityType;
}

export default function RecentActivity({
  recentActivity,
}: RecentActivityProps) {
  return (
    <section
      id="tentang-bgu"
      className="relative items-center gap-y-6 overflow-hidden px-6 py-6 md:py-20 lg:gap-y-0 lg:px-24"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-background md:text-4xl lg:text-5xl">
          Kegiatan <span className="text-secondary">Terbaru</span> Kami
        </h2>
        <div className="flex w-1/2 flex-col items-end gap-y-2">
          <Separator className="h-1 w-[90%] bg-background" />
          <Separator className="h-1 bg-secondary" />
        </div>
      </div>
      <Link
        href={`/kegiatan/${recentActivity.slug}`}
        className="group mt-4 flex cursor-pointer flex-col items-center gap-6 lg:mt-12 lg:flex-row lg:gap-12"
      >
        <figure className="relative aspect-video w-full lg:flex-[3]">
          <Image
            src={recentActivity.image as string}
            alt={recentActivity.title + "Image"}
            fill
            className="z-10 object-cover object-center transition-all duration-500 group-hover:-translate-y-4 group-hover:translate-x-4"
          />
          <div className="absolute -bottom-4 -left-4 z-0 h-full w-full flex-[3] border-4 border-secondary" />
        </figure>
        <div className="w-full space-y-2 lg:flex-[2] lg:space-y-6">
          <p className="font-semibold text-secondary lg:text-lg">
            {formatDate(recentActivity.createdAt)}
          </p>

          <h3 className="text-2xl font-semibold capitalize text-background lg:text-4xl/tight">
            {recentActivity.title}
          </h3>
          <p
            className="line-clamp-3 text-background/80 lg:text-lg"
            dangerouslySetInnerHTML={{ __html: recentActivity.content }}
          />
        </div>
      </Link>
    </section>
  );
}
