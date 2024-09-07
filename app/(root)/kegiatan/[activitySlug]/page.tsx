import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { getActivityBySlug, getAllActivities } from "@/lib/network/activity";
import { formatDate } from "@/lib/formatDate";
import Link from "next/link";
import PictureCarousel from "@/components/Root/Kegiatan/PictureCarousel";

export default async function ActivityDetail({
  params,
}: {
  params: { activitySlug: string };
}) {
  const { activitySlug } = params;

  const activity = await getActivityBySlug(activitySlug);
  const activities = await getAllActivities();

  const exceptionActivities =
    activities.filter((activity) => activity.slug !== activitySlug) || [];

  const firstActivity = exceptionActivities[0];
  const activitiesexceptFirst = exceptionActivities.slice(1);

  return (
    <section className="relative min-h-screen px-6 py-28 md:py-32 lg:flex-row lg:px-24">
      <div className="text mb-6">
        <div className="">
          <div className="text-lg font-semibold text-secondary">
            Kegiatan Bujang Gadis Unsri
          </div>
          <h2 className="mt-4 text-5xl font-bold capitalize">
            {activity.title}
          </h2>
          <div className="mt-2 text-primary">
            {activity && formatDate(activity.createdAt ?? new Date())}
          </div>
          <div className="mt-3 flex items-center gap-4">
            <div className="text-sm">Bagikan : </div>
            <BsFacebook className="text-2xl text-blue-500" />
            <FaXTwitter className="text-2xl" />
          </div>
        </div>
        <div className="mt-6 flex flex-col max-lg:divide-y-2 lg:flex-row lg:divide-x-2">
          <div className="flex-[3] pb-6 lg:pb-0 lg:pe-12">
            <PictureCarousel activity={activity} />
            <div
              className="prose mt-3 lg:prose-lg lg:mt-12"
              dangerouslySetInnerHTML={{ __html: activity?.content }}
            />
            <div className="mt-8 flex items-center gap-4">
              <div className="text-sm">Bagikan : </div>
              <BsFacebook className="text-2xl text-blue-500" />
              <FaXTwitter className="text-2xl" />
            </div>
          </div>
          <div className="flex-[1] pt-6 lg:ps-12 lg:pt-0">
            <div>
              <div className="max-w-fit border-b-4 border-primary font-semibold">
                Berita Terbaru
              </div>
              <div className="max-w- mb-3 h-1 w-full bg-primary" />
              {firstActivity.title !== activity?.title && (
                <Link href={`/kegiatan/${firstActivity.slug}`} className="mb-5">
                  <div className="relative mb-1 aspect-video w-full overflow-hidden rounded-md">
                    <Image
                      src={firstActivity.ActivityImages[0].image as string}
                      alt={firstActivity.title + "Image"}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="text-[15px] font-[500] leading-5">
                    {firstActivity.title}
                  </div>
                  <div className="mb-5 text-sm text-primary">
                    {formatDate(firstActivity.createdAt)}
                  </div>
                </Link>
              )}
              <div className="flex flex-col gap-3 leading-6">
                {activitiesexceptFirst.map((activity, index) => (
                  <Link
                    href={`/kegiatan/${activity.slug}`}
                    key={index}
                    className="flex content-start gap-3"
                  >
                    <figure className="relative aspect-[6/5] flex-[2] overflow-hidden rounded-sm">
                      <Image
                        src={activity.ActivityImages[0].image as string}
                        alt={activity.title + "Image"}
                        fill
                        className="object-cover object-center"
                      />
                    </figure>
                    <div className="flex-[3]">
                      <div className="mb-2 text-[15px] font-[500] leading-5">
                        {activity.title}
                      </div>
                      <div className="text-sm text-primary">
                        {formatDate(activity.createdAt)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
