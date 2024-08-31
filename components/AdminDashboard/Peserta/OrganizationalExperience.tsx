import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserOrganizationalExperienceType } from "@/lib/types/user-organizational-experience";

interface OrganizationalExperienceProps {
  organizationalExperiences: UserOrganizationalExperienceType[];
}

export default function OrganizationalExperience({
  organizationalExperiences,
}: OrganizationalExperienceProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-primary lg:text-3xl">
          Data Pengalaman Organisasi
        </h2>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-primary">No.</TableHead>
            <TableHead className="font-semibold text-primary">
              Nama Organisasi
            </TableHead>
            <TableHead className="font-semibold text-primary">
              Posisi / Jabatan
            </TableHead>
            <TableHead className="font-semibold text-primary">
              Periode
            </TableHead>
            <TableHead className="font-semibold text-primary">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {organizationalExperiences.length > 0 ? (
            <>
              {organizationalExperiences.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.organization}</TableCell>
                  <TableCell>{item.position}</TableCell>
                  <TableCell>{item.period}</TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell>
                Belum Ada Data Pengalaman Organisasi Ditambahkan
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
