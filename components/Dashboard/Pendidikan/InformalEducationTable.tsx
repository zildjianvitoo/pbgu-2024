"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUserInformalEducation } from "@/lib/network/user-informal-education";

import DeleteModal from "../DeleteModal";
import { UserInformalEducationType } from "@/lib/types/user-informal-education";

type Props = {
  userInformalEducations: UserInformalEducationType[];
  userId: string;
};

export default function InformalEducationTable({
  userInformalEducations,
  userId,
}: Props) {
  if (userInformalEducations) {
    return (
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
            <TableHead className="font-semibold text-primary">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userInformalEducations?.length > 0 ? (
            <>
              {userInformalEducations.map((item, index) => (
                <TableRow key={item.type}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.institution}</TableCell>
                  <TableCell>{item.year_start}</TableCell>
                  <TableCell>{item.year_end}</TableCell>
                  <TableCell className="space-x-3">
                    <DeleteModal
                      deleteFunction={deleteUserInformalEducation}
                      params={item.id}
                      queryKey={["user-informal-educations", userId]}
                    />
                  </TableCell>
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
    );
  }
}
