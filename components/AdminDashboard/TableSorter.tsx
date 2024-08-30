import { ArrowUpDown } from "lucide-react";
import { Column } from "@tanstack/react-table";

type TableSorterProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Column<any, unknown>;
  header: string;
};

const TableSorter: React.FC<TableSorterProps> = ({ column, header }) => {
  function handleClick() {
    column.toggleSorting(column.getIsSorted() === "asc");
  }

  return (
    <div
      onClick={handleClick}
      className="group flex w-full items-center gap-3 hover:bg-transparent"
    >
      {header}
      <ArrowUpDown className="ml-6 h-4 w-4 opacity-0 duration-150 group-hover:opacity-100" />
    </div>
  );
};

export default TableSorter;
