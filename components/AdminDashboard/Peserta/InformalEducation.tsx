import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserInformalEducationType } from "@/lib/types/user-informal-education";

interface InformalEducationProps {
  informalEducations: UserInformalEducationType[];
}

export default function InformalEducation({
  informalEducations,
}: InformalEducationProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Pendidikan Non-Formal
        </h2>
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-primary">No.</TableHead>
            <TableHead className="font-semibold text-primary">
              Jenis Pendidikan
            </TableHead>
            <TableHead className="font-semibold text-primary">
              Nama Lembaga
            </TableHead>
            <TableHead className="font-semibold text-primary">
              Tahun Masuk
            </TableHead>
            <TableHead className="font-semibold text-primary">
              Tahun Keluar
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {informalEducations?.length > 0 ? (
            <>
              {informalEducations.map((item, index) => (
                <TableRow key={item.type}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.institution}</TableCell>
                  <TableCell>{item.year_start}</TableCell>
                  <TableCell>{item.year_end}</TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell>
                Belum Ada Data Pendidikan Informal Ditambahkan
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
