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
import { Button } from "@/components/ui/button";

export const registrantColumn: ColumnDef<UserGeneralInfoType>[] = [
  {
    accessorKey: "id",
    accessorFn: (row) => row.id,
    header: ({ column }) => <TableSorter column={column} header="#" />,
    cell: ({ row }) => <div className="ml-4 text-primary">{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    accessorFn: (row) => row.fullname,
    header: ({ column }) => <TableSorter column={column} header="NAMA" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
  },
  {
    accessorKey: "gender",
    accessorFn: (row) => row.gender,
    header: ({ column }) => (
      <TableSorter column={column} header="JENIS KELAMIN" />
    ),
    cell: ({ getValue }) => <div className="">{getValue() as string}</div>,
  },
  {
    accessorKey: "major",
    accessorFn: (row) => row.major,
    header: ({ column }) => <TableSorter column={column} header="JURUSAN" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
  },
  {
    accessorKey: "action",
    header: ({ column }) => <TableSorter column={column} header="ACT" />,
    cell: ({ row }) => (
      <Link href={`/admin-dashboard/peserta/${row.original.User.id}`}>
        <Button size="sm" className="rounded-full px-8 py-0.5">
          Detail
        </Button>
      </Link>
    ),
  },
];
