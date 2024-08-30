import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

type TData = any;

type Props = {
  table: Table<TData>;
};

export default function Pagination({ table }: Props) {
  return (
    <div className="mr-6 flex items-center justify-end gap-2 py-4">
      <Button
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
        variant="secondary"
        className="h-10 w-10 p-0"
      >
        <ChevronsLeft strokeWidth={1.5} />
      </Button>
      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        variant="secondary"
        className="h-10 w-10 p-0"
      >
        <ChevronLeft strokeWidth={1.5} />
      </Button>
      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        variant="secondary"
        className="h-10 w-10 p-0"
      >
        <ChevronRight strokeWidth={1.5} />
      </Button>
      <Button
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
        variant="secondary"
        className="h-10 w-10 p-0"
      >
        <ChevronsRight strokeWidth={1.5} />
      </Button>
    </div>
  );
}
