import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserCompetenceType } from "@/lib/types/user-competence";

interface CompetenceProps {
  competences: UserCompetenceType[];
}
export default function Competence({ competences }: CompetenceProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Kemampuan dan Kompetensi
        </h2>
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-primary">No.</TableHead>
            <TableHead className="font-semibold text-primary">Bidang</TableHead>
            <TableHead className="font-semibold text-primary">
              Keahlian / Bakat
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {competences.length > 0 ? (
            <>
              {competences.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.field}</TableCell>
                  <TableCell>{item.skill}</TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell>
                Belum Ada Data Kemampuan dan Kompetensi Ditambahkan
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
