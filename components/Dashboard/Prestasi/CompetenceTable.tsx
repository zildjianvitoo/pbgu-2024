import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  deleteUserCompetence,
  getUserCompetencesByUserId,
} from "@/lib/network/user-competence";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import DeleteModal from "../DeleteModal";

export default function CompetenceTable() {
  const { data: session } = useSession();
  const userId = session?.user.id || "";

  const { data: userCompetences } = useQuery({
    queryFn: () => getUserCompetencesByUserId(userId),
    queryKey: ["user-competences", userId],
  });

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
