"use client";

import { ColumnDef } from "@tanstack/react-table";
import { VoucherType } from "../types/voucher";
import { formatDate } from "../formatDate";
import DeleteModal from "@/components/Dashboard/DeleteModal";
import { deleteVoucher } from "../network/voucher";
import TableSorter from "@/components/AdminDashboard/TableSorter";

export const voucherColumn: ColumnDef<VoucherType>[] = [
  {
    accessorKey: "id",
    accessorFn: (row) => row.id,
    header: ({ column }) => <TableSorter column={column} header="#" />,
    cell: ({ row }) => <div className="ml-4 text-primary">{row.index + 1}</div>,
  },
  {
    accessorKey: "code",
    accessorFn: (row) => row.code,
    header: ({ column }) => <TableSorter column={column} header="KODE" />,
    cell: ({ getValue }) => <div>{getValue() as string}</div>,
  },
  {
    accessorKey: "price",
    accessorFn: (row) => row.price,
    header: ({ column }) => <TableSorter column={column} header="HARGA" />,
    cell: ({ getValue }) => <div className="">{getValue() as string}</div>,
  },
  {
    accessorKey: "status",
    accessorFn: (row) => row.status,
    header: ({ column }) => <TableSorter column={column} header="STATUS" />,
    cell: ({ getValue }) => (
      <div className="capitalize">{getValue() as string}</div>
    ),
  },
  {
    accessorKey: "finalist",
    accessorFn: (row) => row.finalist?.name,
    header: ({ column }) => <TableSorter column={column} header="TERVOTING" />,
    cell: ({ getValue }) => (
      <div>{getValue() ? (getValue() as string) : "-"}</div>
    ),
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
      <DeleteModal
        params={row.original.id}
        deleteFunction={deleteVoucher}
        queryKey={["vouchers", row.original.id]}
      />
    ),
  },
];
