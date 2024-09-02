"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteUserOrganizationalExperience,
  getAllUserOrganizationalExperiences,
  getUserOrganizationalExperienceById,
  getUserOrganizationalExperiencesByUserId,
} from "@/lib/network/user-organizational-experience";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import DeleteModal from "../DeleteModal";
import { UserOrganizationalExperienceType } from "@/lib/types/user-organizational-experience";

type Props = {
  organizationalExperiences: UserOrganizationalExperienceType[];
  userId: string;
};

export default function OrganizationalExperienceTable({
  organizationalExperiences,
  userId,
}: Props) {
  if (organizationalExperiences) {
    return (
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
                  <TableCell className="space-x-3">
                    <DeleteModal
                      deleteFunction={deleteUserOrganizationalExperience}
                      params={item.id}
                      queryKey={["user-organizational-experiences", userId]}
                    />
                  </TableCell>
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
    );
  }
}
