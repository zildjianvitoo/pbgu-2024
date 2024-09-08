"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/formatDate";
import { ActivityType } from "@/lib/types/activity";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

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
      <div className="group mt-4 flex flex-col items-center gap-6 lg:mt-12 lg:flex-row lg:gap-12">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="z-10 w-full lg:flex-[3]"
        >
          <CarouselContent className="">
            {recentActivity?.ActivityImages.map((image, index) => (
              <CarouselItem key={index}>
                <figure className="relative aspect-video w-full">
                  <Image
                    src={image.image as string}
                    alt={image?.image + "Image"}
                    fill
                    className="object-cover object-center"
                  />
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-none bg-transparent text-white" />
          <CarouselNext className="right-0 border-none bg-transparent text-white" />
          <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full flex-[3] border-4 border-secondary" />
        </Carousel>

        <div className="w-full space-y-2 lg:flex-[2] lg:space-y-6">
          <p className="font-semibold text-secondary lg:text-lg">
            {formatDate(recentActivity?.createdAt)}
          </p>

          <h3 className="text-2xl font-semibold capitalize text-background lg:text-4xl/tight">
            {recentActivity?.title}
          </h3>
          <div
            className="text-background/80 lg:text-lg"
            dangerouslySetInnerHTML={{
              __html: recentActivity?.content ?? <div></div>,
            }}
          />
        </div>
      </div>
    </section>
  );
}
