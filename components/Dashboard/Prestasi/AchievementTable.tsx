import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteUserAchievement,
  getUserAchievementsByUserId,
} from "@/lib/network/user-achievement";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import DeleteModal from "../DeleteModal";

export default function AchievementTable() {
  const { data: session } = useSession();
  const userId = session?.user.id || "";

  const { data: userAchievements } = useQuery({
    queryFn: () => getUserAchievementsByUserId(userId),
    queryKey: ["user-achievements", userId],
  });

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
