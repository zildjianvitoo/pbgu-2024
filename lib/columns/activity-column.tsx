"use client";

import { ColumnDef } from "@tanstack/react-table";
import "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { EllipsisVerticalIcon, Eye, Pencil, Trash } from "lucide-react";
import Image from "next/image";
import { formatDate } from "../formatDate";
import Link from "next/link";
import DeleteModal from "@/components/Dashboard/DeleteModal";
import { deleteActivity } from "../network/activity";
import { ActivityType } from "../types/activity";
import TableSorter from "@/components/AdminDashboard/TableSorter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const activityColumn: ColumnDef<ActivityType>[] = [
  {
    accessorKey: "id",
    accessorFn: (row) => row.id,
    header: ({ column }) => (
      <div className="pl-4">
        <TableSorter column={column} header="#" />
      </div>
    ),
    cell: ({ row }) => <div className="ml-4 text-primary">{row.index + 1}</div>,
  },
  {
    accessorKey: "image",
    accessorFn: (row) => row.ActivityImages,
    header: ({ column }) => <TableSorter column={column} header="SAMPUL" />,
    cell: ({ row }) => {
      const images = row.original.ActivityImages;
      console.log(images);

      return (
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-40"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-40 overflow-hidden rounded-md">
                  <Image
                    src={image.image}
                    className="object-cover object-center"
                    alt={image.image}
                    fill
                  />
                  <p>{image.image}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 border-none bg-transparent text-white" />
          <CarouselNext className="right-0 border-none bg-transparent text-white" />
        </Carousel>
      );
    },
  },
  {
    accessorKey: "title",
    accessorFn: (row) => row.title,
    header: ({ column }) => <TableSorter column={column} header="JUDUL" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
  },
  {
    accessorKey: "createdAt",
    accessorFn: (row) => row.createdAt,
    header: ({ column }) => <TableSorter column={column} header="TANGGAL" />,
    cell: ({ getValue }) => <div>{formatDate(getValue() as string)}</div>,
  },
  {
    accessorKey: "action",
    header: ({ column }) => <TableSorter column={column} header="ACT" />,
    cell: ({ row }) => (
      <div className="relative max-w-fit">
        <Popover>
          <PopoverTrigger>
            <EllipsisVerticalIcon strokeWidth={1.5} />
          </PopoverTrigger>
          <PopoverContent className="absolute -right-4 bottom-0 flex max-w-fit gap-3 px-3 py-1 text-primary">
            <Link href={`/kegiatan/${row.original.slug}`}>
              <Eye size={20} className="cursor-pointer" />
            </Link>
            <Link href={`/admin-dashboard/kegiatan/ubah/${row.original.slug}`}>
              <Pencil size={20} className="cursor-pointer" />
            </Link>
            <DeleteModal
              params={row.original.id}
              deleteFunction={deleteActivity}
              queryKey={["activities"]}
            >
              <Trash size={20} className="cursor-pointer" />
            </DeleteModal>
          </PopoverContent>
        </Popover>
      </div>
    ),
  },
];
