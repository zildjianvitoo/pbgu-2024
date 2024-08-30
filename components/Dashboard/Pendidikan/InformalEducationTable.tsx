"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteUserInformalEducation,
  getUserInformalEducationsByUserId,
} from "@/lib/network/user-informal-education";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import DeleteModal from "../DeleteModal";

export default function InformalEducationTable() {
  const { data: session } = useSession();
  const userId = session?.user.id || "";

  const { data: userInformalEducations } = useQuery({
    queryFn: () => getUserInformalEducationsByUserId(userId),
    queryKey: ["user-informal-educations", userId],
  });

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
