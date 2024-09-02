"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUserAchievement } from "@/lib/network/user-achievement";

import DeleteModal from "../DeleteModal";
import { UserAchievementType } from "@/lib/types/user-achievement";

type Props = {
  userAchievements: UserAchievementType[];
  userId: string;
};

export default function AchievementTable({ userAchievements, userId }: Props) {
  if (userAchievements) {
    return (
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
          {userAchievements.length > 0 ? (
            <>
              {userAchievements.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.achievement}</TableCell>
                  <TableCell>{item.instance}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell className="space-x-3">
                    <DeleteModal
                      deleteFunction={deleteUserAchievement}
                      params={item.id}
                      queryKey={["user-achievements", userId]}
                    />
                  </TableCell>
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
    );
  }
}
