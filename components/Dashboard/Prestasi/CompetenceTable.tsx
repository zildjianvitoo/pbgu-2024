"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUserCompetence } from "@/lib/network/user-competence";

import DeleteModal from "../DeleteModal";
import { UserCompetenceType } from "@/lib/types/user-competence";

type Props = {
  userCompetences: UserCompetenceType[];
  userId: string;
};

export default function CompetenceTable({ userCompetences, userId }: Props) {
  if (userCompetences) {
    return (
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="font-semibold text-primary">No.</TableHead>
            <TableHead className="font-semibold text-primary">Bidang</TableHead>
            <TableHead className="font-semibold text-primary">
              Keahlian / Bakat
            </TableHead>
            <TableHead className="font-semibold text-primary">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userCompetences.length > 0 ? (
            <>
              {userCompetences.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.field}</TableCell>
                  <TableCell>{item.skill}</TableCell>
                  <TableCell className="space-x-3">
                    <DeleteModal
                      deleteFunction={deleteUserCompetence}
                      params={item.id}
                      queryKey={["user-competences", userId]}
                    />
                  </TableCell>
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
    );
  }
}
