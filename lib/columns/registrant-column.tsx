"use client";

import { ColumnDef } from "@tanstack/react-table";
import TableSorter from "@/components/AdminDashboard/TableSorter";
// import "date-fns";
import { UserType } from "@/lib/types/user";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Divide, EllipsisVerticalIcon, Eye, Pencil } from "lucide-react";
import Link from "next/link";
import { UserGeneralInfoType } from "../types/user-general-info";

export const registrantColumn: ColumnDef<UserGeneralInfoType>[] = [
  {
    accessorKey: "id",
    accessorFn: (row) => row.id,
    header: ({ column }) => <TableSorter column={column} header="#" />,
    cell: ({ getValue }) => (
      <div className="ml-4 text-primary">{getValue() as string}</div>
    ),
  },
  {
    accessorKey: "name",
    accessorFn: (row) => row.fullname,
    header: ({ column }) => <TableSorter column={column} header="JUDUL" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
  },
  {
    accessorKey: "gender",
    accessorFn: (row) => row.gender,
    header: ({ column }) => <TableSorter column={column} header="PEMBACA" />,
    cell: ({ getValue }) => <div className="">{getValue() as string}</div>,
  },
  {
    accessorKey: "major",
    accessorFn: (row) => row.major,
    header: ({ column }) => <TableSorter column={column} header="TANGGAL" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
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
            <Link href={`/admin-dashboard/peserta/${row.original.id}`}>
              <Eye size={20} className="cursor-pointer" />
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    ),
  },
];
