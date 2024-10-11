"use client";

import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import Pagination from "../Pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import CreateVoucherModal from "./CreateVoucherModal";

interface VoucherTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function VoucherTable<TData, TValue>({
  columns,
  data,
}: VoucherTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  // Filter data berdasarkan input pencarian

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      pagination,
    },
  });

  return (
    <div className="w-full rounded-md bg-white">
      <div className="flex items-center justify-between p-4 lg:p-6">
        <h2 className="w-full text-lg">Tabel Voucher</h2>
        <CreateVoucherModal>
          <div className="flex w-64 items-center justify-center gap-3 rounded-lg bg-primary px-6 py-2 text-slate-200">
            <PlusCircle className="h-5 w-5" />
            <span className="lg:text-lg">Tambah Voucher</span>
          </div>
        </CreateVoucherModal>
      </div>
      <hr />
      <div className="flex gap-6 p-4 lg:p-6">
        <div className="flex-1 lg:flex-row">
          <Input
            className="border-shadow h-10 w-full rounded"
            onChange={(e) =>
              table.getColumn("code")?.setFilterValue(e.target.value)
            }
            placeholder={`Cari Kode Voucher...`}
            value={(table.getColumn("code")?.getFilterValue() ?? "") as string}
          />
        </div>
        <div className="flex-1 lg:flex-row">
          <Input
            className="border-shadow h-10 w-full rounded"
            onChange={(e) =>
              table.getColumn("participant")?.setFilterValue(e.target.value)
            }
            placeholder={`Cari Nama Peserta...`}
            value={
              (table.getColumn("participant")?.getFilterValue() ?? "") as string
            }
          />
        </div>
        <div className="flex-1 lg:flex-row">
          <Select
            onValueChange={(value) => {
              if (value === "default") {
                table.getColumn("price")?.setFilterValue(undefined);
              } else {
                table.getColumn("price")?.setFilterValue(value);
              }
            }}
          >
            <SelectTrigger className="border-shadow h-10 w-full rounded">
              <SelectValue placeholder="Pilih Tarif Voucher" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="default">Semua Tarif</SelectItem>
              <SelectItem value="20000">Rp. 20.000</SelectItem>
              <SelectItem value="50000">Rp. 50.000</SelectItem>
              <SelectItem value="75000">Rp. 75.000</SelectItem>
              <SelectItem value="100000">Rp. 100.000</SelectItem>
              <SelectItem value="250000">Rp. 250.000</SelectItem>
              <SelectItem value="500000">Rp. 500.000</SelectItem>
              <SelectItem value="1000000">Rp. 1.000.000</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex-1 lg:flex-row">
          <Select
            onValueChange={(value) => {
              if (value === "default") {
                table.getColumn("status")?.setFilterValue(undefined);
              } else {
                table.getColumn("status")?.setFilterValue(value);
              }
            }}
          >
            <SelectTrigger className="border-shadow h-10 w-full rounded">
              <SelectValue placeholder="Pilih Status Voucher" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="default">Semua Status</SelectItem>
              <SelectItem value="belum-terpakai">Belum Terpakai</SelectItem>
              <SelectItem value="sudah-terpakai">Sudah Terpakai</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <hr />

      <ScrollArea>
        <Table className="min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <hr />
      <Pagination table={table} />
    </div>
  );
}
