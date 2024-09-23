import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import { Upload } from "lucide-react";
import { Button } from "./ui/button";

interface ExcelExportProps {
  data: any[];
  filename: string;
}

export default function ExcelExport({ data, filename }: ExcelExportProps) {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Buffer to store the generated Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(blob, filename);
  };

  return (
    <Button
      variant="secondary"
      onClick={exportToExcel}
      className="flex gap-2 text-white"
    >
      <Upload size={20} strokeWidth={2.25} />
      Export
    </Button>
  );
}
