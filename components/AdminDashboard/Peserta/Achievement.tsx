import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserAchievementType } from "@/lib/types/user-achievement";

interface AchievementProps {
  achievements: UserAchievementType[];
}

export default function Achievement({ achievements }: AchievementProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Prestasi yang Pernah Diraih
        </h2>
      </div>

      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-primary">No.</TableHead>
            <TableHead className="font-semibold text-primary">
              Nama Penghargaan
            </TableHead>
            <TableHead className="font-semibold text-primary">
              Instansi Pemberi Penghargaan
            </TableHead>
            <TableHead className="font-semibold text-primary">Tahun</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {achievements.length > 0 ? (
            <>
              {achievements.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.achievement}</TableCell>
                  <TableCell>{item.instance}</TableCell>
                  <TableCell>{item.year}</TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell>Belum Ada Data Prestasi yang Pernah Diraih</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
