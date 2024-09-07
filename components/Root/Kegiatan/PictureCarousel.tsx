"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ActivityType } from "@/lib/types/activity";

interface PictureCarouselProps {
  activity: ActivityType;
}

export default function PictureCarousel({ activity }: PictureCarouselProps) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {activity.ActivityImages.map((image, index) => (
          <CarouselItem key={index}>
            <figure className="relative aspect-video w-full overflow-hidden">
              <Image
                src={image?.image as string}
                fill
                alt={activity?.title}
                className="object-cover object-center"
              />
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 border-none bg-transparent text-white" />
      <CarouselNext className="right-0 border-none bg-transparent text-white" />
    </Carousel>
  );
}
